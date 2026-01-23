import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'reviews.json');

// Helper to read reviews
function getReviews() {
    try {
        const fileData = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(fileData);
    } catch (error) {
        return [];
    }
}

// Helper to write reviews
function saveReviews(reviews: any[]) {
    try {
        // Ensure directory exists
        const dir = path.dirname(dataFilePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(dataFilePath, JSON.stringify(reviews, null, 2), 'utf8');
        return true;
    } catch (error) {
        console.error("Error saving reviews:", error);
        return false;
    }
}

export async function GET() {
    const reviews = getReviews();
    return NextResponse.json(reviews);
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Basic validation
        if (!body.name || !body.rating || !body.service) {
            return NextResponse.json(
                { error: 'Missing required fields: name, rating, service' },
                { status: 400 }
            );
        }

        const newReview = {
            id: Date.now().toString(),
            name: body.name,
            suburb: body.suburb || '',
            service: body.service,
            rating: Number(body.rating),
            comment: body.comment || '',
            date: new Date().toISOString().split('T')[0]
        };

        const currentReviews = getReviews();
        const updatedReviews = [newReview, ...currentReviews];

        saveReviews(updatedReviews);

        return NextResponse.json({ success: true, review: newReview }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
