interface BlogContentProps {
    content: string;
}

function renderInlineBold(text: string) {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, j) => {
        if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
}

/** Simple markdown-like renderer for blog content */
export default function BlogContent({ content }: BlogContentProps) {
    const lines = content.split("\n");
    const elements: React.ReactNode[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        if (!trimmed) continue;

        if (trimmed.startsWith("## ")) {
            elements.push(
                <h2 key={key++} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                    {trimmed.slice(3)}
                </h2>
            );
        } else if (trimmed.startsWith("- ")) {
            elements.push(
                <div key={key++} className="text-slate-700 mb-2 ml-4 flex gap-2">
                    <span className="text-yellow-500">•</span>
                    <span>{renderInlineBold(trimmed.slice(2))}</span>
                </div>
            );
        } else if (trimmed.startsWith("**") && trimmed.endsWith("**") && !trimmed.includes("\n")) {
            elements.push(
                <p key={key++} className="text-slate-700 mb-2 font-semibold">
                    {trimmed.slice(2, -2)}
                </p>
            );
        } else {
            elements.push(
                <p key={key++} className="text-slate-700 mb-4 leading-relaxed">
                    {renderInlineBold(trimmed)}
                </p>
            );
        }
    }

    return <div className="prose prose-slate max-w-none space-y-2">{elements}</div>;
}
