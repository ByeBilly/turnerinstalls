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
        name: "Carrara",
        slug: "carrara",
        region: "gold-coast",
        postcode: "4211",
        description: "Commercial showroom and residential flooring installation on the Gold Coast. Carrara projects often need tidy floor covering removal, clean substrate preparation, and a sharp finish that is ready for customers, tenants, or handover.",
        archetype: "commercial",
        landmarks: ["Carrara Markets", "Nerang-Broadbeach Road", "Metricon Stadium precinct"],
        image: { src: "/images/Showroom-Carrara-Gold-Coast.jpeg", alt: "Carrara Gold Coast showroom flooring installation" },
        galleryImages: [
            { src: "/images/Showroom-Carrara-Gold-Coast.jpeg", alt: "Carrara showroom flooring installation on the Gold Coast" },
            { src: "/images/Showroom-Carrara-Gold-Coast1.jpeg", alt: "Carrara showroom flooring install detail" },
            { src: "/images/vinyl_install-browns-plains.jpeg", alt: "Commercial vinyl flooring install detail" },
            { src: "/images/Timber-Oxley.jpeg", alt: "Professional timber flooring installation detail" }
        ]
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
    },

    // OXLEY & WESTERN UP-MARKET METRO
    {
        name: "Oxley",
        slug: "oxley",
        region: "brisbane",
        postcode: "4075",
        description: "Turner Installs' home base. We specialise in both classic brick-and-tile homes and modern townhouses in Oxley. Our central proximity ensures rapid response for all local floor preparation needs.",
        archetype: "historic",
        landmarks: ["Oxley Station", "The Station Oxley"],
        image: siteImages.home.transformations[0]
    },
    {
        name: "Corinda",
        slug: "corinda",
        region: "brisbane",
        postcode: "4075",
        description: "High-end heritage and modern luxury. From sprawling estates to boutique apartments, Corinda demands a high standard of finish. We provide precision levelling for premium flooring installs.",
        archetype: "historic",
        landmarks: ["Corinda State High", "Dunlop Park"],
        image: siteImages.home.transformations[1]
    },
    {
        name: "Sherwood",
        slug: "sherwood",
        region: "brisbane",
        postcode: "4075",
        description: "Known for its beautiful arboretum and heritage homes. We help Sherwood residents restore their timber subfloors or prep new slabs for luxury hybrid flooring.",
        archetype: "historic",
        landmarks: ["Sherwood Arboretum"],
        image: siteImages.home.transformations[2]
    },
    {
        name: "Chelmer",
        slug: "chelmer",
        region: "brisbane",
        postcode: "4068",
        description: "Prestige riverfront properties. Chelmer's high-value renovations require meticulous floor preparation. We specialize in large-format tile prep and engineered timber subfloors.",
        archetype: "historic",
        landmarks: ["Chelmer Bridge", "Honour Ave"],
        image: { src: "/new_gen/hero/gracevillechelmer.png", alt: "Chelmer Floor Prep" }
    },
    {
        name: "Fig Tree Pocket",
        slug: "fig-tree-pocket",
        region: "brisbane",
        postcode: "4069",
        description: "Rural charm meets modern luxury. Fig Tree Pocket's large estates often feature expansive concrete slabs. We ensure they are perfectly level and moisture-protected.",
        archetype: "new-build",
        landmarks: ["Lone Pine Koala Sanctuary", "Fig Tree Pocket Rd"],
        image: siteImages.floorPrep.process[0]
    },
    {
        name: "Indooroopilly",
        slug: "indooroopilly",
        region: "brisbane",
        postcode: "4068",
        description: "A mix of classic homes and premium apartments. We provide noise-compliant grinding for high-rises and heritage-correct subfloor repairs for Indooroopilly renovations.",
        archetype: "apartment",
        landmarks: ["Indooroopilly Shopping Centre", "St Lucia Golf Links"],
        image: siteImages.grinding.actionShots[1]
    }
];

export const getSuburb = (slug: string) => suburbs.find(s => s.slug === slug);
export const getSuburbsByRegion = (region: Region) => suburbs.filter(s => s.region === region);
