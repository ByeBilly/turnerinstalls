/**
 * Flooring Installation suburb landing pages
 * Target: "flooring installation + suburb" searches in Brisbane
 * Liam (installer) is based in Oxley - focus on nearby wealthier suburbs
 */

export interface FlooringInstallationSuburb {
    name: string;
    slug: string;
    postcode: string;
    seoTitle: string;
    metaDescription: string;
    introParagraph: string;
    localRelevance: string;
    whyChooseLocal: string;
    ctaText: string;
    /** Nearby suburbs for internal linking */
    nearbySuburbs: string[];
}

export const flooringInstallationSuburbs: FlooringInstallationSuburb[] = [
    {
        name: "Oxley",
        slug: "oxley",
        postcode: "4074",
        seoTitle: "Flooring Installation in Oxley | Timber, Hybrid & Vinyl Floors",
        metaDescription: "Professional flooring installation in Oxley. Timber, hybrid, vinyl & laminate floors. Local installer based in Oxley—fast quotes and quality finishes for 4074.",
        introParagraph: "Turner Installs provides high-quality flooring installation throughout Oxley. We specialise in timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for homes across the suburb. As a local installer based in Oxley, we bring genuine local knowledge and close proximity to every job—meaning faster site visits and a finish that reflects the care we take in our own neighbourhood.",
        localRelevance: "Oxley’s mix of heritage brick homes, interwar cottages, and riverside properties along the Brisbane River creates diverse flooring needs. From stabilising timber subfloors in older Queenslanders to preparing concrete slabs in newer builds, we understand the local housing styles and the challenges that come with Oxley’s varied terrain and flood-aware construction.",
        whyChooseLocal: "Being based in Oxley means we’re minutes from your project. We offer fast site visits for quotes and measurements, and our high-end finish is suited to both heritage restorations and modern renovations. With years of experience in Oxley and surrounding suburbs, we know how to work with local builders, real estate agents, and homeowners to deliver flooring that lasts.",
        ctaText: "If you’re in Oxley and looking for a professional flooring installer, contact us today for a quote.",
        nearbySuburbs: ["graceville", "sherwood", "corinda"],
    },
    {
        name: "Graceville",
        slug: "graceville",
        postcode: "4075",
        seoTitle: "Flooring Installation in Graceville | Timber, Hybrid & Vinyl Floors",
        metaDescription: "Expert flooring installation in Graceville. Timber, hybrid, vinyl & laminate floors. Local installer near Oxley—heritage homes and riverside renovations in 4075.",
        introParagraph: "Turner Installs delivers premium flooring installation across Graceville. We install timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for homeowners renovating and upgrading their properties. Based near Oxley, we combine local knowledge with close proximity to Graceville—ensuring quick site visits and a finish that reflects the suburb’s heritage character.",
        localRelevance: "Graceville is renowned for its heritage Queenslanders, riverside homes along Honour Avenue, and tree-lined streets. Many properties feature original timber subfloors, post-war extensions, and ongoing renovation projects. We’re experienced with the specific challenges of Graceville’s homes: stabilising old timber, levelling for seamless extensions, and preparing floors for premium hybrid or timber installations.",
        whyChooseLocal: "Our base near Oxley puts us within minutes of Graceville. We offer fast site visits for quotes and measurements, and our high-end finish is ideal for the premium homes that characterise the area. We have extensive experience with heritage renovations and understand the expectations of Graceville homeowners seeking quality flooring.",
        ctaText: "If you’re in Graceville and looking for a professional flooring installer, contact us today for a quote.",
        nearbySuburbs: ["oxley", "sherwood", "chelmer", "corinda"],
    },
    {
        name: "Sherwood",
        slug: "sherwood",
        postcode: "4075",
        seoTitle: "Flooring Installation in Sherwood | Timber, Hybrid & Vinyl Floors",
        metaDescription: "Professional flooring installation in Sherwood. Timber, hybrid, vinyl & laminate floors. Local installer near Oxley—heritage homes and family renovations in 4075.",
        introParagraph: "Turner Installs delivers premium flooring installation throughout Sherwood. We specialise in timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for homes across the suburb. Based near Oxley, we bring local knowledge and close proximity to every Sherwood project—ensuring fast site visits and finishes that match the quality of the suburb’s established homes.",
        localRelevance: "Sherwood’s heritage Queenslanders, interwar cottages, and family homes near Sherwood Arboretum create a strong demand for quality flooring. Many properties feature original timber subfloors, kitchen extensions, and open-plan renovations. We’re experienced with the specific needs of Sherwood’s housing stock: subfloor stabilisation, levelling for new extensions, and seamless transitions between old and new areas.",
        whyChooseLocal: "Being based near Oxley means we’re just minutes from Sherwood. We offer fast site visits for quotes and measurements, and our high-end finish is suited to both heritage restorations and modern family upgrades. We have extensive experience with renovation projects and understand the expectations of Sherwood homeowners.",
        ctaText: "If you’re in Sherwood and looking for a professional flooring installer, contact us today for a quote.",
        nearbySuburbs: ["graceville", "oxley", "chelmer", "corinda"],
    },
    {
        name: "Chelmer",
        slug: "chelmer",
        postcode: "4068",
        seoTitle: "Flooring Installation in Chelmer | Timber, Hybrid & Vinyl Floors",
        metaDescription: "Premium flooring installation in Chelmer. Timber, hybrid, vinyl & laminate floors. Local installer near Oxley—riverside homes and heritage renovations in 4068.",
        introParagraph: "Turner Installs provides high-quality flooring installation across Chelmer. We install timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for homeowners upgrading their riverside and heritage properties. Based near Oxley, we combine local knowledge with close proximity to Chelmer—delivering fast site visits and finishes that suit the suburb’s premium character.",
        localRelevance: "Chelmer’s riverside homes, heritage Queenslanders near the Walter Taylor Bridge, and established family residences create diverse flooring needs. Many properties feature original timber subfloors, river views, and ongoing renovation projects. We’re experienced with Chelmer’s housing styles: stabilising timber subfloors, preparing for premium hybrid or timber installations, and handling the specific challenges of riverside and heritage homes.",
        whyChooseLocal: "Our base near Oxley puts us within minutes of Chelmer. We offer fast site visits for quotes and measurements, and our high-end finish is ideal for the premium riverside and heritage homes that characterise the area. We have extensive experience with renovation projects and understand the expectations of Chelmer homeowners.",
        ctaText: "If you’re in Chelmer and looking for a professional flooring installer, contact us today for a quote.",
        nearbySuburbs: ["graceville", "indooroopilly", "sherwood", "fig-tree-pocket"],
    },
    {
        name: "Corinda",
        slug: "corinda",
        postcode: "4075",
        seoTitle: "Flooring Installation in Corinda | Timber, Hybrid & Vinyl Floors",
        metaDescription: "Expert flooring installation in Corinda. Timber, hybrid, vinyl & laminate floors. Local installer near Oxley—heritage homes and hilly terrain in 4075.",
        introParagraph: "Turner Installs delivers premium flooring installation throughout Corinda. We specialise in timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for homes across the suburb. Based near Oxley, we bring local knowledge and close proximity to every Corinda project—ensuring fast site visits and finishes that suit the suburb’s mix of heritage and modern homes.",
        localRelevance: "Corinda’s hilly terrain, heritage Queenslanders, and interwar dwellings near Oxley Road and the Brisbane River create unique flooring challenges. Many properties feature split-level layouts, original timber subfloors, and views toward Mount Coot-tha. We’re experienced with Corinda’s housing: subfloor stabilisation, ramping for uneven levels, and preparing floors for premium timber or hybrid installations in heritage and renovated homes.",
        whyChooseLocal: "Being based near Oxley means we’re just minutes from Corinda. We offer fast site visits for quotes and measurements, and our high-end finish is suited to both heritage restorations and modern renovations. We have extensive experience with hilly terrain and split-level homes, and understand the expectations of Corinda homeowners.",
        ctaText: "If you’re in Corinda and looking for a professional flooring installer, contact us today for a quote.",
        nearbySuburbs: ["oxley", "graceville", "sherwood", "jindalee"],
    },
    {
        name: "Jindalee",
        slug: "jindalee",
        postcode: "4074",
        seoTitle: "Flooring Installation in Jindalee | Timber, Hybrid & Vinyl Floors",
        metaDescription: "Professional flooring installation in Jindalee. Timber, hybrid, vinyl & laminate floors. Local installer near Oxley—family homes and Centenary suburbs in 4074.",
        introParagraph: "Turner Installs provides high-quality flooring installation across Jindalee. We install timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for homeowners throughout the Centenary suburbs. Based near Oxley, we combine local knowledge with close proximity to Jindalee—delivering fast site visits and finishes that suit family homes and modern renovations.",
        localRelevance: "Jindalee’s mix of established family homes, riverside properties along the Brisbane River, and newer townhouse developments creates diverse flooring needs. Many properties feature concrete slabs, open-plan living, and kitchen or whole-home renovations. We’re experienced with Jindalee’s housing: slab preparation, levelling for hybrid or vinyl plank, and delivering a high-end finish that matches the suburb’s family-oriented character.",
        whyChooseLocal: "Our base near Oxley puts us within easy reach of Jindalee. We offer fast site visits for quotes and measurements, and our high-end finish is ideal for family homes and renovation projects. We have extensive experience with the Centenary suburbs and understand the expectations of Jindalee homeowners.",
        ctaText: "If you’re in Jindalee and looking for a professional flooring installer, contact us today for a quote.",
        nearbySuburbs: ["kenmore", "indooroopilly", "corinda", "chapel-hill"],
    },
    {
        name: "Kenmore",
        slug: "kenmore",
        postcode: "4069",
        seoTitle: "Flooring Installation in Kenmore | Timber, Hybrid & Vinyl Floors",
        metaDescription: "Premium flooring installation in Kenmore. Timber, hybrid, vinyl & laminate floors. Local installer near Oxley—leafy family homes and renovations in 4069.",
        introParagraph: "Turner Installs delivers premium flooring installation throughout Kenmore. We specialise in timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for the suburb’s established family homes. Based near Oxley, we bring local knowledge and close proximity to every Kenmore project—ensuring fast site visits and finishes that suit the suburb’s leafy, professional character.",
        localRelevance: "Kenmore’s rolling hills, large family homes, and proximity to Kenmore Plaza and Kenmore Village create strong demand for quality flooring. Many properties feature extensions, kitchen renovations, and whole-home upgrades. We’re experienced with Kenmore’s housing: subfloor preparation, tile removal and levelling, and delivering a high-end finish that matches the expectations of professional families and academics in the area.",
        whyChooseLocal: "Being based near Oxley means we’re within minutes of Kenmore. We offer fast site visits for quotes and measurements, and our high-end finish is ideal for the premium family homes that characterise the suburb. We have extensive experience with extensions and renovations, and understand the expectations of Kenmore homeowners.",
        ctaText: "If you’re in Kenmore and looking for a professional flooring installer, contact us today for a quote.",
        nearbySuburbs: ["chapel-hill", "indooroopilly", "jindalee", "fig-tree-pocket"],
    },
    {
        name: "Chapel Hill",
        slug: "chapel-hill",
        postcode: "4069",
        seoTitle: "Flooring Installation in Chapel Hill | Timber, Hybrid & Vinyl Floors",
        metaDescription: "Expert flooring installation in Chapel Hill. Timber, hybrid, vinyl & laminate floors. Local installer near Oxley—affluent homes and 1970s architecture in 4069.",
        introParagraph: "Turner Installs provides high-quality flooring installation across Chapel Hill. We install timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for the suburb’s affluent homeowners. Based near Oxley, we combine local knowledge with close proximity to Chapel Hill—delivering fast site visits and finishes that suit the suburb’s distinctive character and high standards.",
        localRelevance: "Chapel Hill’s established residential character, distinctive 1970s architecture, and proximity to Mount Coot-tha create a strong demand for quality flooring. Many properties feature split-level layouts, open-plan living, and ongoing renovation projects. We’re experienced with Chapel Hill’s housing: subfloor preparation, levelling for premium installations, and delivering a high-end finish that matches the expectations of affluent homeowners in the area.",
        whyChooseLocal: "Our base near Oxley puts us within easy reach of Chapel Hill. We offer fast site visits for quotes and measurements, and our high-end finish is ideal for the premium homes that characterise the suburb. We have extensive experience with renovation projects and understand the expectations of Chapel Hill homeowners.",
        ctaText: "If you’re in Chapel Hill and looking for a professional flooring installer, contact us today for a quote.",
        nearbySuburbs: ["kenmore", "indooroopilly", "fig-tree-pocket", "jindalee"],
    },
    {
        name: "Indooroopilly",
        slug: "indooroopilly",
        postcode: "4068",
        seoTitle: "Flooring Installation in Indooroopilly | Timber, Hybrid & Vinyl Floors",
        metaDescription: "Professional flooring installation in Indooroopilly. Timber, hybrid, vinyl & laminate floors. Local installer near Oxley—shopping hub and family homes in 4068.",
        introParagraph: "Turner Installs delivers premium flooring installation throughout Indooroopilly. We specialise in timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for homes across the suburb. Based near Oxley, we bring local knowledge and close proximity to Indooroopilly—ensuring fast site visits and finishes that suit the suburb’s mix of established homes and modern apartments.",
        localRelevance: "Indooroopilly’s position as a major shopping and transport hub, combined with its established family homes and riverside properties, creates diverse flooring needs. Many properties feature heritage character, apartment renovations, and whole-home upgrades. We’re experienced with Indooroopilly’s housing: subfloor preparation, slab levelling, and delivering a high-end finish that matches the expectations of homeowners in this well-connected suburb.",
        whyChooseLocal: "Being based near Oxley means we’re just minutes from Indooroopilly. We offer fast site visits for quotes and measurements, and our high-end finish is suited to both heritage restorations and modern renovations. We have extensive experience with the western suburbs and understand the expectations of Indooroopilly homeowners.",
        ctaText: "If you’re in Indooroopilly and looking for a professional flooring installer, contact us today for a quote.",
        nearbySuburbs: ["chelmer", "kenmore", "fig-tree-pocket", "chapel-hill"],
    },
    {
        name: "Fig Tree Pocket",
        slug: "fig-tree-pocket",
        postcode: "4069",
        seoTitle: "Flooring Installation in Fig Tree Pocket | Timber, Hybrid & Vinyl Floors",
        metaDescription: "Premium flooring installation in Fig Tree Pocket. Timber, hybrid, vinyl & laminate floors. Local installer near Oxley—riverside estates and exclusive homes in 4069.",
        introParagraph: "Turner Installs provides high-quality flooring installation across Fig Tree Pocket. We install timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for the suburb’s exclusive riverside and estate properties. Based near Oxley, we combine local knowledge with close proximity to Fig Tree Pocket—delivering fast site visits and finishes that suit the suburb’s premium character.",
        localRelevance: "Fig Tree Pocket’s low-density zoning, riverside estates, and large blocks near Lone Pine Koala Sanctuary create a strong demand for premium flooring. Many properties feature expansive living areas, river views, and ongoing renovation projects. We’re experienced with Fig Tree Pocket’s housing: subfloor preparation for large areas, levelling for premium timber or hybrid installations, and delivering a high-end finish that matches the expectations of homeowners in this exclusive suburb.",
        whyChooseLocal: "Our base near Oxley puts us within easy reach of Fig Tree Pocket. We offer fast site visits for quotes and measurements, and our high-end finish is ideal for the premium riverside and estate homes that characterise the area. We have extensive experience with large-scale renovations and understand the expectations of Fig Tree Pocket homeowners.",
        ctaText: "If you’re in Fig Tree Pocket and looking for a professional flooring installer, contact us today for a quote.",
        nearbySuburbs: ["indooroopilly", "chelmer", "kenmore", "chapel-hill"],
    },
];

export const getFlooringInstallationSuburb = (slug: string) =>
    flooringInstallationSuburbs.find((s) => s.slug === slug);

export const getAllFlooringInstallationSlugs = () =>
    flooringInstallationSuburbs.map((s) => s.slug);
