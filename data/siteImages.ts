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
            // tags removed as requested
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
        turnerDifference: [
            { src: "/installspics/prep/floods/Perfect flood level for mirror finish on suspended slab.jpeg", alt: "Mirror Finish Flood Levelling" },
            { src: "/installspics/prep/floods/absolute perfect flood levelling.jpg", alt: "Absolute Perfect Flood Levelling" }
        ],
        unacceptable: [
            { src: "/installspics/prep/damage/water damage.jpg", alt: "Water Damaged Substrate" },
            { src: "/installspics/prep/repair/We would prefer not to have to fix other installers installations. These sorts of issues are avoided by choosing us first. Obvious cause non levelled floor.jpg", alt: "Installation Failure due to Poor Prep" }
        ] as ImageAsset[],
        process: [
            { src: "/installspics/prep/uplift/We aim for minimal mess on the messiest uplifts.jpeg", alt: "Clean Uplift & Removal" },
            { src: "/installspics/prep/level/filling the low parts, this ensures a perfect install whrn the planks are laid.jpg", alt: "Filling Low Spots for Perfect Install" },
            { src: "/installspics/prep/floods/absolute perfect flood levelling.jpg", alt: "Absolute Perfect Flood Levelling" },
            { src: "/installspics/prep/uplift/exact description required.jpg", alt: "ACTION REQUIRED: Description Needed" },
            { src: "/installspics/prep/uplift/advise please on text to go with this image.jpg", alt: "ACTION REQUIRED: Advise on Text" },
            { src: "/installspics/prep/uplift/smoothedge required to be removed.jpg", alt: "Carpet Smoothedge Removal" },
            { src: "/installspics/prep/level/quick mix of engineered cement will sort lows requiring just  light sanding.jpg", alt: "Engineered Cement Application" },
            { src: "/installspics/prep/level/prepping the lows.jpg", alt: "Pre-filling Low Spots" }
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
            { src: "/installspics/prep/grinding/619904184_2167234590687272_1260573441369883843_n.jpg", alt: "Surface Preparation Grinding" },
            { src: "/installspics/prep/grinding/621198149_912693617936405_2497899494714228508_n.jpg", alt: "Slab Rectification Grinding" }
        ] as ImageAsset[],
        closeups: [
            { src: "/installspics/prep/level/filled lowsand high spots grinded.jpg", alt: "Filled Lows and Grinded Highs" },
            { src: "/installspics/prep/level/levelled area using engineered floor levelling compounds.jpg", alt: "Prepared Surface for Flooring" }
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
            { src: "/installspics/finished/resource_9JmHv_OmwMo1MpdbXVmkGM.png", alt: "Showroom Floor" },
            // Expanded Commercial-Suitable Shots
            { src: "/installspics/finished/resource_bkfeSZ7f1E421hciwg6kzd.png", alt: "Large Area Hybrid Flooring" },
            { src: "/installspics/finished/resource_8yJmk1mavUh27w1xuwpkOj.png", alt: "Clean Modern Installation" },
        ] as ImageAsset[],
        teamShots: [] as ImageAsset[]
    },
    home: {
        transformations: [
            // Main Transformation Gallery (Mixed Finished & Laying)
            { src: "/installspics/laying/newly laid timber for stairs.jpeg", alt: "Newly Laid Timber for Stairs" },
            { src: "/installspics/laying/We aim for minimal mess during the install with cutting tables set up in suitable areas.jpeg", alt: "Minimal Mess Installation with Setup Cutting Tables" },
            { src: "/installspics/laying/Laying of the timber floors before Carpenters fit the skirting boards is the optimal way to unsure beautiful finish to walls.jpg", alt: "Timber Floors Laid Before Skirting for Perfect Finish" },
            { src: "/installspics/laying/Furniture sometimes requires us to juggle it around during installation if it can't be removed.jpg", alt: "Careful Installation Around Furniture" },
            { src: "/installspics/prep/floods/mirror glass level flood.jpg", alt: "Mirror Glass Level Flood" },
            { src: "/installspics/finished/resource_bkfeSZ7f1E421hciwg6kzd.png", alt: "Hybrid Flooring Finish" },
            // Expanded "Finished" Set
            { src: "/installspics/finished/resource_9P4V5A71bJ19uiTBiRV4_n.png", alt: "Staircase Installation" },
            { src: "/installspics/finished/resource_avPl0dbJ2Se1Om54B2t_d-.png", alt: "Modern Living Room" },
            { src: "/installspics/finished/image6.jpeg", alt: "Completed Flooring Install" },
            { src: "/installspics/finished/image8.jpeg", alt: "Timber Finish" },
            { src: "/installspics/finished/image12.jpeg", alt: "Precision Joinery" },
            { src: "/installspics/finished/624334347_867521999407008_3752902728129270114_n.jpg", alt: "Living Space Upgrade" },
            { src: "/installspics/finished/625202306_2029285471055177_1026514747943361388_n.jpg", alt: "Open Plan Finishing" },
            { src: "/installspics/finished/619897238_955768730356309_1546209723191758279_n.jpg", alt: "Hallway Installation" }
        ] as ImageAsset[],
        installation: [
            // Work In Progress / Laying Shots
            { src: "/installspics/laying/619925254_908172228218921_6998300752197139231_n.jpg", alt: "Installation in Progress" },
            { src: "/installspics/laying/621997835_1505921570505186_593915977347517883_n.jpg", alt: "Precision Cuts" },
            { src: "/installspics/laying/619973203_911868691790640_5245926640594864581_n.jpg", alt: "Substrate Checking" },
            { src: "/installspics/laying/622122337_2401358896985815_216730946828062350_n.jpg", alt: "Plank Laying" },
            { src: "/installspics/laying/624294133_1572505330566282_4397485069894811667_n.jpg", alt: "Detail Work" },
            { src: "/installspics/laying/minimal mess and always a tidy up.jpg", alt: "Clean Worksite" },
            { src: "/installspics/laying/staircases require time for adhesives to set before being climbed.jpg", alt: "Staircase Alignment" }
        ] as ImageAsset[],
        services: {
            residential: { src: "/installspics/finished/resource_avPl0dbJ2Se1Om54B2t_d-.png", alt: "Residential Flooring" },
            commercial: { src: "/installspics/commercial/Commercial installations whilst working productively with other trades.jpg", alt: "Commercial Flooring" },
            prep: { src: "/installspics/prep/floods/Perfect flood level for mirror finish on suspended slab.jpeg", alt: "Floor Preparation" }
        }
    },
    promos: [
        { src: "/installspics/promo/resource_8P_Cj-OFJBd0sw4UnCskDO.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_8TUnqYbwE7QfXK-c6Nh4Wp.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_8hoRmbeN0wZaeTsIWHp4VF.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_8yJmk1mavUh27w1xuwpkOj.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_95uj0hzuj1v1C7qkWOEkrr.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_9E5ZV1zBxT49n_5rNrG4Rh.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_9JmHv_OmwMo1MpdbXVmkGM.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_9P4V5A71bJ19uiTBiRV4_n.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_9fVqoabE10H5PDfVW4rOXY.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_9lHkze3Ds8Z1QyCOQPH4TS.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_aBEkaitrTCk72k87nfv_L8.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_aP5bupwFyWM93ezxw5O_9M.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_aXFaxIbnxcn31X3xVqcko3.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_ab58rXvFYil6pLx4xXI_OU.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_avPl0dbJ2Se1Om54B2t_d-.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_b6Aa_UvXsUe6KUZx3Cd_LF.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_bcHx5yFfMiH6FiD4JYkOpV.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_bkfeSZ7f1E421hciwg6kzd.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_bnG5a3wMAtXf_Lxy5drOK3.png", alt: "Turner Installs Promo" },
        { src: "/installspics/promo/resource_bt_PPY6KwUxaw6UigiR_vb.png", alt: "Turner Installs Promo" }
    ]
};
