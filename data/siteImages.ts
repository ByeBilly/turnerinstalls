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
            src: "/installspics/prep/prepare/we can make even this slab look brand new.jpg",
            alt: "Restoring Damaged Concrete Slabs to Like-New Condition",
            tags: ["prep", "hero"]
        },
        beforeAfter: [
            {
                before: { src: "/installspics/prep/damage/damage 1.jpg", alt: "Severely Damaged Substrate" },
                after: { src: "/installspics/prep/floods/Perfect flood level for mirror finish on suspended slab.jpeg", alt: "Mirror Finish Flood Levelling on Suspended Slab" }
            },
            {
                before: { src: "/installspics/prep/level/lows identified and filled.jpg", alt: "Identifying Low Spots in Slab" },
                after: { src: "/installspics/prep/level/levelled area using engineered floor levelling compounds.jpg", alt: "Levelled with Engineered Compounds" }
            }
        ],
        unacceptable: [
            { src: "/installspics/prep/damage/water damage.jpg", alt: "Water Damaged Substrate" },
            { src: "/installspics/prep/uplift/glue.jpg", alt: "Heavy Glue Residue" },
            { src: "/installspics/prep/repair/We would prefer not to have to fix other installers installations. These sorts of issues are avoided by choosing us first. Obvious cause non levelled floor.jpg", alt: "Installation Failure due to Poor Prep" }
        ] as ImageAsset[],
        process: [
            { src: "/installspics/prep/uplift/We aim for minimal mess on the messiest uplifts.jpeg", alt: "Clean Uplift & Removal", tags: ["uplift"] },
            { src: "/installspics/prep/level/filling the low parts, this ensures a perfect install whrn the planks are laid.jpg", alt: "Filling Low Spots for Perfect Install", tags: ["levelling"] },
            { src: "/installspics/prep/floods/absolute perfect flood levelling.jpg", alt: "Absolute Perfect Flood Levelling", tags: ["flood"] },
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
            { src: "/installspics/prep/level/showing how sliding doors are installed too low, if they cant be raised or replaced concrete needs grinding down to suitable height.jpg", alt: "Grinding for Height Clearance" },
            { src: "/installspics/prep/grinding/619904184_2167234590687272_1260573441369883843_n.jpg", alt: "Surface Preparation Grinding" }
        ] as ImageAsset[],
        closeups: [
            { src: "/installspics/prep/level/filled lowsand high spots grinded.jpg", alt: "Filled Lows and Grinded Highs" },
        ] as ImageAsset[]
    },
    commercial: {
        hero: {
            src: "/installspics/commercial/Commercial installations whilst working productively with other trades.jpg",
            alt: "Professional Commercial Installation Working with Other Trades",
            tags: ["commercial", "hero"]
        },
        projectShots: [
            { src: "/installspics/commercial/Commercial installations whilst working productively with other trades always.jpg", alt: "Coordinated Commercial Work" },
            { src: "/installspics/finished/resource_avPl0dbJ2Se1Om54B2t_d-.png", alt: "Retail Space Finishing" },
            { src: "/installspics/finished/resource_9P4V5A71bJ19uiTBiRV4_n.png", alt: "Commercial Lobby" },
            { src: "/installspics/finished/resource_9JmHv_OmwMo1MpdbXVmkGM.png", alt: "Showroom Floor" }
        ] as ImageAsset[],
        teamShots: [] as ImageAsset[]
    },
    home: {
        transformations: [
            { src: "/installspics/laying/newly laid timber for stairs.jpeg", alt: "Newly Laid Timber for Stairs" },
            { src: "/installspics/laying/We aim for minimal mess during the install with cutting tables set up in suitable areas.jpeg", alt: "Minimal Mess Installation with Setup Cutting Tables" },
            { src: "/installspics/laying/Laying of the timber floors before Carpenters fit the skirting boards is the optimal way to unsure beautiful finish to walls.jpg", alt: "Timber Floors Laid Before Skirting for Perfect Finish" },
            { src: "/installspics/laying/Furniture sometimes requires us to juggle it around during installation if it can't be removed.jpg", alt: "Careful Installation Around Furniture" },
            { src: "/installspics/prep/floods/mirror glass level flood.jpg", alt: "Mirror Glass Level Flood" },
            { src: "/installspics/finished/resource_bkfeSZ7f1E421hciwg6kzd.png", alt: "Hybrid Flooring Finish" },
        ] as ImageAsset[],
        services: {
            residential: { src: "/installspics/finished/resource_avPl0dbJ2Se1Om54B2t_d-.png", alt: "Residential Flooring" },
            commercial: { src: "/installspics/commercial/Commercial installations whilst working productively with other trades.jpg", alt: "Commercial Flooring" },
            prep: { src: "/installspics/prep/floods/Perfect flood level for mirror finish on suspended slab.jpeg", alt: "Floor Preparation" }
        }
    }
};
