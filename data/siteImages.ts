export type ImageAsset = {
    src: string;
    alt: string;
    tags?: string[];
    useOn?: string[];
};

export const siteImages = {
    floorPrep: {
        hero: {
            src: "/installspics/prep/new_prep_61981.jpg",
            alt: "Professional Concrete Floor Preparation and Levelling",
            tags: ["prep", "hero"]
        },
        beforeAfter: [
            {
                before: { src: "/installspics/damage/621166857_885739330891673_3503451650253763148_n.jpg", alt: "Damaged Surface" },
                after: { src: "/installspics/prep/new_prep_61729.jpg", alt: "Repaired and Leveled Slab" }
            },
            {
                before: { src: "/installspics/damage/622128087_4377674519131721_4905055129240349322_n.jpg", alt: "Uneven Substrate" },
                after: { src: "/installspics/prep/new_prep_61938.jpg", alt: "Level Finish" }
            }
        ] as { before: ImageAsset; after: ImageAsset }[],
        unacceptable: [
            { src: "/installspics/damage/621166857_885739330891673_3503451650253763148_n.jpg", alt: "Structural Cracking" },
            { src: "/installspics/damage/622128087_4377674519131721_4905055129240349322_n.jpg", alt: "Moisture Damage" }
        ] as ImageAsset[],
        process: [
            { src: "/installspics/prep/new_prep_62113.jpg", alt: "Grinding concrete surface", tags: ["grinding"] },
            { src: "/installspics/prep/new_prep_61734.jpg", alt: "Applying primer", tags: ["priming"] },
            { src: "/installspics/prep/new_prep_61938.jpg", alt: "Flood levelling application", tags: ["levelling"] },
        ] as ImageAsset[]
    },
    grinding: {
        hero: {
            src: "/installspics/prep/grinding/621164508_1665500128138991_4555687774613313366_n.jpg",
            alt: "Concrete Grinding in Action",
            tags: ["grinding", "hero"]
        },
        actionShots: [
            { src: "/installspics/prep/grinding/621164508_1665500128138991_4555687774613313366_n.jpg", alt: "Dustless concrete grinding" },
            { src: "/installspics/prep/new_prep_62113.jpg", alt: "Surface Preparation" },
        ] as ImageAsset[],
        closeups: [
            { src: "/installspics/prep/new_prep_61729.jpg", alt: "Profiled concrete surface" },
        ] as ImageAsset[]
    },
    commercial: {
        hero: {
            src: "/installspics/finished/resource_8hoRmbeN0wZaeTsIWHp4VF.png",
            alt: "Commercial Office Flooring Project",
            tags: ["commercial", "hero"]
        },
        projectShots: [
            { src: "/installspics/finished/resource_8hoRmbeN0wZaeTsIWHp4VF.png", alt: "Office fitout" },
            { src: "/installspics/finished/resource_avPl0dbJ2Se1Om54B2t_d-.png", alt: "Residential/Commercial Hybrid" },
        ] as ImageAsset[],
        teamShots: [] as ImageAsset[]
    },
    home: {
        transformations: [
            { src: "/installspics/finished/resource_9P4V5A71bJ19uiTBiRV4_n.png", alt: "Staircase Installation" },
            { src: "/installspics/finished/resource_avPl0dbJ2Se1Om54B2t_d-.png", alt: "Modern Living Room" },
            { src: "/installspics/prep/new_prep_61801.jpg", alt: "Surface Prep" },
            { src: "/installspics/prep/new_prep_61734.jpg", alt: "Levelling" },
            { src: "/installspics/prep/new_prep_61961.jpg", alt: "Clean Finish" },
            { src: "/installspics/prep/new_prep_61938.jpg", alt: "Pouring Leveler" },
        ] as ImageAsset[],
        services: {
            residential: { src: "/installspics/finished/resource_avPl0dbJ2Se1Om54B2t_d-.png", alt: "Residential Flooring" },
            commercial: { src: "/installspics/finished/resource_8hoRmbeN0wZaeTsIWHp4VF.png", alt: "Commercial Flooring" },
            prep: { src: "/installspics/prep/new_prep_61981.jpg", alt: "Floor Preparation" }
        }
    }
};
