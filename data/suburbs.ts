import { siteImages } from './siteImages';

export type Region = 'brisbane' | 'gold-coast' | 'sunshine-coast' | 'toowoomba' | 'gympie';
export type HousingArchetype = 'historic' | 'apartment' | 'new-build' | 'commercial';

export interface SuburbData {
    name: string;
    slug: string;
    region: Region;
    postcode: string;
    description: string;
    archetype: HousingArchetype;
    landmarks?: string[];
    image?: { src: string; alt: string };
    galleryImages?: { src: string; alt: string }[];
}

export const suburbs: SuburbData[] = [
    // BRISBANE - GRACEVILLE
    {
        name: "Graceville",
        slug: "graceville",
        region: "brisbane",
        postcode: "4075",
        description: "Renowned for its heritage Queenslanders and riverfront homes. We provide expert subfloor preparation for Graceville renovations, ensuring old timber structures are stable and level.",
        archetype: "historic",
        landmarks: ["Graceville Ave", "Honour Ave"],
        image: { src: "/new_gen/hero/Graceville.jpg", alt: "Graceville Floor Preparation" },
        galleryImages: [
            { src: "/new_gen/hero/graceville1.png", alt: "Graceville Subfloor Correction" },
            { src: "/new_gen/hero/gracevillechelmer.png", alt: "Graceville & Chelmer Renovation" }
        ]
    },

    // BRISBANE - THE GAP
    {
        name: "The Gap",
        slug: "the-gap",
        region: "brisbane",
        postcode: "4061",
        description: "Leafy, hilly, and full of renovations. The Gap presents unique challenges with split-level homes and rock foundations. We ensure your floors are dead flat regardless of the terrain.",
        archetype: "historic",
        landmarks: ["Waterworks Road", "Enoggera Reservoir"],
        image: { src: "/new_gen/hero/thegap.png", alt: "The Gap Floor Preparation" },
        galleryImages: [
            { src: "/installspics/finished/thegap1.jpg", alt: "The Gap Flooring" },
            { src: "/installspics/finished/thegap_staircase.jpg", alt: "The Gap Staircase Upgrade" }
        ]
    },

    // GOLD COAST - HIGHLIFE / APARTMENTS
    {
        name: "Surfers Paradise",
        slug: "surfers-paradise",
        region: "gold-coast",
        postcode: "4217",
        description: "Specializing in high-rise floor preparation. We handle strict body corporate acoustic requirements, dust control, and balcony leveling for Surfers Paradise apartments.",
        archetype: "apartment",
        landmarks: ["Q1", "Cavill Avenue"],
        image: siteImages.commercial.projectShots[0] // Use a commercial shot
    },
    {
        name: "Broadbeach",
        slug: "broadbeach",
        region: "gold-coast",
        postcode: "4218",
        description: "Luxury apartment floor preparation. From removing old tiles to checking acoustic standards for renovation, we are Broadbeach's preferred prep team.",
        archetype: "apartment",
        landmarks: ["The Star", "Oasis"],
        image: siteImages.home.transformations[0]
    },
    {
        name: "Burleigh Heads",
        slug: "burleigh-heads",
        region: "gold-coast",
        postcode: "4220",
        description: "Renovating a beach shack or a modern apartment in Burleigh? We remove sand cement bedding, grind clean, and prep for timber or hybrid flooring.",
        archetype: "historic",
        landmarks: ["Burleigh Hill", "James St"],
        image: siteImages.home.transformations[2]
    },

    // BRISBANE - KENMORE
    {
        name: "Kenmore",
        slug: "kenmore",
        region: "brisbane",
        postcode: "4069",
        description: "Large family homes on the western fringe. We handle floor prep for Kenmore extensions, kitchen renovations, and tile removal.",
        archetype: "historic",
        landmarks: ["Kenmore Plaza", "Moggill Rd"],
        image: { src: "/installspics/finished/kenmore.jpg", alt: "Kenmore Floor Preparation" },
        galleryImages: [
            { src: "/installspics/finished/kenmore.jpg", alt: "Kenmore Project" },
            { src: "/installspics/finished/kenmore1.jpg", alt: "Kenmore Flooring Upgrade" }
        ]
    },

    // BRISBANE - RENOVATION BELT
    {
        name: "New Farm",
        slug: "new-farm",
        region: "brisbane",
        postcode: "4005",
        description: "Restoring floors in historic New Farm Queenslanders requires care. We specialize in subfloor strengthening, removing old lino glue, and ramping for seamless extensions.",
        archetype: "historic",
        landmarks: ["New Farm Park", "Powerhouse"],
        image: siteImages.home.transformations[1],
        galleryImages: [
            { src: "/installspics/finished/newfarm.jpg", alt: "New Farm Renovation" },
            { src: "/installspics/finished/newfarm1.jpeg", alt: "New Farm Timber Prep" },
            { src: "/installspics/finished/newfarm2.jpg", alt: "New Farm Flooring" },
            { src: "/installspics/finished/newfarm_kitchen.jpg", alt: "New Farm Kitchen Prep" }
        ]
    },
    {
        name: "Paddington",
        slug: "paddington",
        region: "brisbane",
        postcode: "4064",
        description: "Dealing with uneven floors in a Paddington cottage? Our ramping and subfloor repair services ensure your new expensive timber floor sits perfectly flat.",
        archetype: "historic",
        landmarks: ["Latrobe Terrace"],
        image: { src: "/installspics/finished/paddington.jpg", alt: "Paddington Cottage Floor" },
        galleryImages: [
            { src: "/installspics/finished/paddington.jpg", alt: "Paddington Floor Prep" },
            { src: "/installspics/finished/paddington1.jpg", alt: "Paddington Subfloor" },
            { src: "/installspics/finished/paddington2.jpg", alt: "Paddington Ramping" },
            { src: "/installspics/finished/paddingtonstairs.jpeg", alt: "Paddington Staircase" }
        ]
    },
    {
        name: "Teneriffe",
        slug: "teneriffe",
        region: "brisbane",
        postcode: "4005",
        description: "Woolstore apartment renovations demand precision. We offer low-dust grinding and acoustic matting installation for Teneriffe's heritage listed buildings.",
        archetype: "apartment",
        landmarks: ["Woolstores"],
        image: siteImages.grinding.actionShots[0]
    },

    // GROWTH / NEW BUILD
    {
        name: "North Lakes",
        slug: "north-lakes",
        region: "brisbane",
        postcode: "4509",
        description: "Fixing humps and hollows in new concrete slabs regarding handover. We grind and flood level new homes in North Lakes to meet flooring warranty specs.",
        archetype: "new-build",
        landmarks: [],
        image: siteImages.floorPrep.process[1]
    }
];

export const getSuburb = (slug: string) => suburbs.find(s => s.slug === slug);
export const getSuburbsByRegion = (region: Region) => suburbs.filter(s => s.region === region);
