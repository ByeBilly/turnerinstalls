export type ImageAsset = {
    src: string;
    alt: string;
    tags?: string[];
    useOn?: string[];
    caption?: string;
};

export const siteImages = {
    floorPrep: {
        hero: {
            src: "/installspics/prep/622022549_906959995126564_7888490141707035731_n.jpg",
            alt: "Professional Concrete Floor Preparation",
            tags: ["prep", "hero"]
        },
        beforeAfter: [
            {
                before: { src: "/installspics/damage/621166857_885739330891673_3503451650253763148_n.jpg", alt: "Cracked & Damaged Slab" },
                after: { src: "/installspics/prep/622054382_2262228947636956_5246768817063027151_n.jpg", alt: "Repaired & Smoothed" }
            },
            {
                before: { src: "/installspics/damage/622128087_4377674519131721_4905055129240349322_n.jpg", alt: "Uneven Substrate" },
                after: { src: "/installspics/prep/floods/image7.jpeg", alt: "Flood Leveled Surface" }
            }
        ],
        unacceptable: [
            { src: "/installspics/damage/621166857_885739330891673_3503451650253763148_n.jpg", alt: "Structural Cracking" },
            { src: "/installspics/damage/622128087_4377674519131721_4905055129240349322_n.jpg", alt: "Surface Contamination" },
            { src: "/installspics/prep/floods/623811068_863910639969499_2854463971981847763_n.jpg", alt: "Rough Pour" }
        ] as ImageAsset[],
        process: [
            { src: "/installspics/prep/grinding/621164508_1665500128138991_4555687774613313366_n.jpg", alt: "Mechanical Grinding", tags: ["grinding"] },
            { src: "/installspics/prep/622480460_1220199480269397_437481934661813736_n.jpg", alt: "Surface Priming", tags: ["priming"] },
            { src: "/installspics/prep/floods/image7.jpeg", alt: "Levelling Compound", tags: ["levelling"] },
        ] as ImageAsset[]
    },
    grinding: {
        hero: {
            src: "/installspics/prep/grinding/621164508_1665500128138991_4555687774613313366_n.jpg",
            alt: "Concrete Grinding Operation",
            tags: ["grinding", "hero"]
        },
        actionShots: [
            { src: "/installspics/prep/grinding/621164508_1665500128138991_4555687774613313366_n.jpg", alt: "Dustless Grinding System" },
            { src: "/installspics/prep/622480460_1220199480269397_437481934661813736_n.jpg", alt: "Surface Profiling" },
            { src: "/installspics/prep/624601652_1947091935846037_42213469209580663_n.jpg", alt: "Edging Work" },
        ] as ImageAsset[],
        closeups: [
            { src: "/installspics/prep/622022549_906959995126564_7888490141707035731_n.jpg", alt: "Clean Profiled Slab" },
        ] as ImageAsset[]
    },
    commercial: {
        hero: {
            src: "/installspics/finished/resource_8hoRmbeN0wZaeTsIWHp4VF.png",
            alt: "Commercial Office Flooring Project",
            tags: ["commercial", "hero"]
        },
        projectShots: [
            { src: "/installspics/finished/resource_8hoRmbeN0wZaeTsIWHp4VF.png", alt: "Office Fitout" },
            { src: "/installspics/finished/resource_avPl0dbJ2Se1Om54B2t_d-.png", alt: "Retail Space" },
            { src: "/installspics/finished/resource_9P4V5A71bJ19uiTBiRV4_n.png", alt: "Commercial Lobby" },
            { src: "/installspics/finished/resource_9JmHv_OmwMo1MpdbXVmkGM.png", alt: "Showroom Floor" }
        ] as ImageAsset[],
        teamShots: [] as ImageAsset[]
    },
    home: {
        transformations: [
            { src: "/installspics/finished/resource_9P4V5A71bJ19uiTBiRV4_n.png", alt: "Staircase Installation" },
            { src: "/installspics/finished/resource_avPl0dbJ2Se1Om54B2t_d-.png", alt: "Living Area Transformation" },
            { src: "/installspics/laying/619925254_908172228218921_6998300752197139231_n.jpg", alt: "Installation in Progress" },
            { src: "/installspics/laying/621997835_1505921570505186_593915977347517883_n.jpg", alt: "Precision Cuts" },
            { src: "/installspics/finished/resource_9fVqoabE10H5PDfVW4rOXY.png", alt: "Modern Timber Finish" },
            { src: "/installspics/finished/resource_bkfeSZ7f1E421hciwg6kzd.png", alt: "Hybrid Flooring" },
        ] as ImageAsset[],
        services: {
            residential: { src: "/installspics/finished/resource_avPl0dbJ2Se1Om54B2t_d-.png", alt: "Residential Flooring" },
            commercial: { src: "/installspics/finished/resource_8hoRmbeN0wZaeTsIWHp4VF.png", alt: "Commercial Flooring" },
            prep: { src: "/installspics/prep/622022549_906959995126564_7888490141707035731_n.jpg", alt: "Floor Preparation" }
        }
    }
};
