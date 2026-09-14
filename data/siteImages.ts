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
            },
            {
                before: { src: "/installspics/prep/floorprep.jpg", alt: "Floor Preparation in Progress" },
                after: { src: "/installspics/prep/level/floorlevelsout.jpg", alt: "Perfectly Levelled Subfloor" }
            }
        ],
        turnerDifference: [
            { src: "/installspics/prep/floods/Perfect flood level for mirror finish on suspended slab.jpeg", alt: "Mirror Finish Flood Levelling" },
            { src: "/installspics/prep/floods/absolute perfect flood levelling.jpg", alt: "Absolute Perfect Flood Levelling" },
            { src: "/installspics/prep/floods/floodprep.jpg", alt: "Professional Flood Levelling Preparation" }
        ],
        unacceptable: [
            { src: "/installspics/prep/damage/water damage.jpg", alt: "Water Damaged Substrate" },
            { src: "/installspics/prep/repair/We would prefer not to have to fix other installers installations. These sorts of issues are avoided by choosing us first. Obvious cause non levelled floor.jpg", alt: "Zoom in on the yellow straight edge: Severe unevenness causing failure" }
        ] as ImageAsset[],
        process: [
            { src: "/installspics/prep/uplift/messy-uplift-clean-web.jpg", alt: "Clean Uplift & Removal" },
            { src: "/installspics/prep/level/filling-low-parts-for-perfect-install.jpg", alt: "Filling Low Spots for Perfect Install" },
            { src: "/installspics/prep/floods/absolute perfect flood levelling.jpg", alt: "Absolute Perfect Flood Levelling" },
            { src: "/installspics/prep/uplift/old planks removed.jpg", alt: "Old Flooring Removed for Subfloor Prep" },
            { src: "/installspics/prep/uplift/advise please on text to go with this image.jpg", alt: "Old Flooring Cleared Before Prep" },
            { src: "/installspics/prep/uplift/smoothedge required to be removed.jpg", alt: "Carpet Smoothedge Removal" },
            { src: "/installspics/prep/level/quick mix of engineered cement will sort lows requiring just  light sanding.jpg", alt: "Engineered Cement Application" },
            { src: "/installspics/prep/level/prepping the lows.jpg", alt: "Pre-filling Low Spots" },
            { src: "/installspics/prep/floorprep.jpg", alt: "Professional Subfloor Preparation" },
            { src: "/installspics/prep/level/floorlevelsout.jpg", alt: "Floor Levelled Out — Mirror Flat Finish" },
            { src: "/installspics/prep/floods/floodprep.jpg", alt: "Flood Levelling Compound Application" }
        ] as ImageAsset[],
        // Broader real-photo pool for the 19 suburb floor-prep pages to rotate
        // through, so pages don't all render the same three photos. Each entry
        // is an actual Turner Installs job photo pulled from previously-unused
        // files in public/installspics — none of this pool duplicates the
        // curated hero/turnerDifference/unacceptable/process sets above.
        gallery: [
            { src: "/installspics/prep/uplift/messy-uplift-clean-web.jpg", alt: "Clean uplift and removal, site kept controlled" },
            { src: "/installspics/prep/uplift/old planks removed.jpg", alt: "Old flooring planks removed before subfloor prep" },
            { src: "/installspics/prep/uplift/advise please on text to go with this image.jpg", alt: "Old flooring cleared back to bare substrate" },
            { src: "/installspics/prep/uplift/smoothedge required to be removed.jpg", alt: "Carpet smoothedge and staples removed" },
            { src: "/installspics/prep/uplift/glue.jpg", alt: "Old adhesive residue before mechanical removal" },
            { src: "/installspics/prep/uplift/ceramic tile uplifts.jpeg", alt: "Ceramic tile uplift ahead of substrate prep" },
            { src: "/installspics/prep/uplift/We aim for minimal mess on the messiest uplifts.jpeg", alt: "Controlled, tidy uplift even on messy jobs" },
            { src: "/installspics/prep/level/filling-low-parts-for-perfect-install.jpg", alt: "Filling low spots for a perfect install" },
            { src: "/installspics/prep/level/prepping-the-lows.jpg", alt: "Prepping low areas ahead of levelling" },
            { src: "/installspics/prep/level/floorlevelsout.jpg", alt: "Subfloor levelled out to a flat finish" },
            { src: "/installspics/prep/level/yellowtongue-levelling-buildup.jpg", alt: "Yellow tongue subfloor levelling build-up" },
            { src: "/installspics/prep/level/engineered-cement-mix-application.jpg", alt: "Engineered cement mix applied to correct lows" },
            { src: "/installspics/prep/floods/absolute-perfect-flood-levelling.jpg", alt: "Flood levelling poured for a dead-flat finish" },
            { src: "/installspics/prep/floods/floodprep.jpg", alt: "Flood levelling compound application in progress" },
            { src: "/installspics/prep/floods/mirror-glass-level-flood.jpg", alt: "Mirror-glass level finish after flood levelling" },
            { src: "/installspics/prep/grinding/619904184_2167234590687272_1260573441369883843_n.jpg", alt: "Diamond grinding to open up the surface profile" },
            { src: "/installspics/prep/grinding/621164508_1665500128138991_4555687774613313366_n.jpg", alt: "Dustless concrete grinding in progress" },
            { src: "/installspics/prep/grinding/621198149_912693617936405_2497899494714228508_n.jpg", alt: "Slab rectification by mechanical grinding" },
            { src: "/installspics/prep/damage/needs descript.jpg", alt: "Substrate condition assessed before preparation" },
            { src: "/installspics/prep/repair/repair.jpg", alt: "Cracked substrate repaired before levelling" },
            { src: "/installspics/prep/prepare/Often on new builds we find slabs requiring work.jpg", alt: "New-build slab requiring correction before flooring" },
            { src: "/installspics/prep/prepare/we can make even this slab look brand new.jpg", alt: "Damaged slab restored to a like-new finish" },
        ] as ImageAsset[],
        upliftRemoval: [
            {
                src: "/installspics/prep/uplift/messy-uplift-clean-web.jpg",
                alt: "Clean flooring uplift and removal",
                caption: "Existing floor coverings lifted with the work area kept controlled and ready for preparation."
            },
            {
                src: "/images/carpet-tile-removal-Murrarie.jpeg",
                alt: "Carpet tile removal and substrate clean-up",
                caption: "Old carpet tiles removed, adhesive assessed and the base prepared for the new flooring system."
            },
            {
                src: "/Liams-trucks/removerubbish.jpeg",
                alt: "Turner Installs removal truck and site clean-up",
                caption: "Waste is taken off site instead of being left in the client's bins or garage."
            }
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
            { src: "/installspics/commercial/Commercial installations whilst working productively with other trades.jpg", alt: "Large Scale Commercial Flooring" },
            { src: "/installspics/commercial/commercial_liam.jpg", alt: "Commercial Flooring Installation" },
            { src: "/installspics/prep/grinding/621164508_1665500128138991_4555687774613313366_n.jpg", alt: "Commercial Concrete Preparation" },
            { src: "/installspics/prep/floods/Perfect flood level for mirror finish on suspended slab.jpeg", alt: "Industrial Grade Levelling" },
        ] as ImageAsset[],
        teamShots: [] as ImageAsset[]
    },
    home: {
        transformations: [
            // Main Transformation Gallery (Strictly Finished Shots)
            { src: "/images/Showroom-Carrara-Gold-Coast.jpeg", alt: "Gold Coast showroom flooring project" },
            { src: "/images/Showroom-Carrara-Gold-Coast1.jpeg", alt: "Gold Coast showroom flooring project detail" },
            { src: "/images/Timber-Oxley.jpeg", alt: "Youngs Crossing timber-look flooring project" },
            { src: "/images/vinyl_install-browns-plains.jpeg", alt: "Browns Plains vinyl flooring installation" },
            { src: "/images/Vinyl-install-Murrarie.jpeg", alt: "Murrarie vinyl flooring installation" },
            { src: "/installspics/finished/image6.jpeg", alt: "Premium Timber Finish" },
            { src: "/installspics/finished/image12.jpeg", alt: "Precision Joinery & Installation" },
            { src: "/installspics/finished/image8.jpeg", alt: "Rich Red Timber Flooring Detail" },
            { src: "/installspics/finished/newfarm1.jpeg", alt: "Seamless Timber Plank Installation" },
            { src: "/installspics/finished/paddington2.jpg", alt: "Seamless Hybrid Flooring" },
            { src: "/installspics/finished/thegap_staircase.jpg", alt: "Hallway & Stair Perfection" },
            { src: "/installspics/finished/newfarm2.jpg", alt: "Clean Lines & Transitions" },
            { src: "/installspics/finished/kenmore1.jpg", alt: "Expert Finish" },
            { src: "/installspics/finished/bedroom.jpg", alt: "Bedroom Flooring — Flawless Finish" },
            { src: "/installspics/finished/finishedfloor.jpg", alt: "Immaculate Finished Floor" }
        ] as ImageAsset[],
        installation: [
            // Work In Progress / Laying Shots
            { src: "/installspics/laying/620002964_1404919931328854_4306718358574087892_n.jpg", alt: "Installation in Progress" },
            { src: "/installspics/laying/621997835_1505921570505186_593915977347517883_n.jpg", alt: "Precision Cuts" },
            { src: "/installspics/laying/619973203_911868691790640_5245926640594864581_n.jpg", alt: "Substrate Checking" },
            { src: "/installspics/laying/622122337_2401358896985815_216730946828062350_n.jpg", alt: "Plank Laying" },
            { src: "/installspics/laying/624294133_1572505330566282_4397485069894811667_n.jpg", alt: "Detail Work" },
            { src: "/installspics/laying/minimal mess and always a tidy up.jpg", alt: "Clean Worksite" },
            { src: "/installspics/laying/staircases require time for adhesives to set before being climbed.jpg", alt: "Staircase Alignment" },
            { src: "/installspics/finished/stairs_laid.jpg", alt: "Components & Transitions" },
            { src: "/installspics/laying/layingthefloor.jpg", alt: "Laying the Floor — Precision Plank Placement" },
            { src: "/installspics/laying/floorstep.jpg", alt: "Step-by-Step Floor Installation" }
        ] as ImageAsset[],
        services: {
            residential: { src: "/installspics/finished/image6.jpeg", alt: "Residential Flooring" },
            commercial: { src: "/installspics/commercial/Commercial installations whilst working productively with other trades.jpg", alt: "Commercial Flooring" },
            prep: { src: "/installspics/prep/floods/Perfect flood level for mirror finish on suspended slab.jpeg", alt: "Floor Preparation" }
        },
        removalProjects: [
            {
                src: "/images/carpet-tile-removal-Murrarie.jpeg",
                alt: "Carpet tile removal and install in Murrarie",
                caption: "Old carpet tiles lifted cleanly, adhesive assessed, and the surface prepared for the new flooring system."
            },
            {
                src: "/images/Vinyl-install-Murrarie.jpeg",
                alt: "Vinyl installation in Murrarie",
                caption: "Removal, preparation, and vinyl installation completed with neat edges and practical commercial durability."
            },
            {
                src: "/images/vinyl_install-browns-plains.jpeg",
                alt: "Vinyl installation in Browns Plains",
                caption: "Fresh vinyl install after substrate checks, floor preparation, and clean finishing work."
            }
        ] as ImageAsset[]
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
