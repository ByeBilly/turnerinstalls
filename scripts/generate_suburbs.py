#!/usr/bin/env python3
"""Generate suburb entries for top 80 wealthiest Brisbane suburbs."""

# Suburbs to add: name, slug, postcode
# From Microburbs top 80 - excluding ones we already have
SUBS = [
    ("Brookfield", "brookfield", "4069"),
    ("Pullenvale", "pullenvale", "4069"),
    ("Hawthorne", "hawthorne", "4171"),
    ("Balmoral", "balmoral", "4171"),
    ("Hamilton", "hamilton", "4007"),
    ("Ascot", "ascot", "4007"),
    ("Wilston", "wilston", "4051"),
    ("Grange", "grange", "4051"),
    ("Alderley", "alderley", "4051"),
    ("Enoggera", "enoggera", "4051"),
    ("Hendra", "hendra", "4011"),
    ("Camp Hill", "camp-hill", "4152"),
    ("Upper Brookfield", "upper-brookfield", "4069"),
    ("Clayfield", "clayfield", "4011"),
    ("Milton", "milton", "4064"),
    ("Norman Park", "norman-park", "4170"),
    ("Tarragindi", "tarragindi", "4121"),
    ("Newmarket", "newmarket", "4051"),
    ("Morningside", "morningside", "4170"),
    ("Holland Park West", "holland-park-west", "4121"),
    ("Taringa", "taringa", "4068"),
    ("Carina", "carina", "4152"),
    ("Auchenflower", "auchenflower", "4066"),
    ("Seven Hills", "seven-hills", "4170"),
    ("Cannon Hill", "cannon-hill", "4170"),
    ("West End", "west-end", "4101"),
    ("Kenmore Hills", "kenmore-hills", "4069"),
    ("Holland Park", "holland-park", "4121"),
    ("Coorparoo", "coorparoo", "4151"),
    ("Bridgeman Downs", "bridgeman-downs", "4035"),
    ("Kalinga", "kalinga", "4030"),
    ("Lutwyche", "lutwyche", "4030"),
    ("Windsor", "windsor", "4030"),
    ("Wooloowin", "wooloowin", "4030"),
    ("Kangaroo Point", "kangaroo-point", "4169"),
    ("Newstead", "newstead", "4006"),
    ("Petrie Terrace", "petrie-terrace", "4000"),
    ("Gordon Park", "gordon-park", "4031"),
    ("Highgate Hill", "highgate-hill", "4101"),
    ("Pinjarra Hills", "pinjarra-hills", "4069"),
    ("Gumdale", "gumdale", "4154"),
    ("Kedron", "kedron", "4031"),
    ("Wakerley", "wakerley", "4154"),
    ("Yeronga", "yeronga", "4104"),
    ("Fortitude Valley", "fortitude-valley", "4006"),
    ("East Brisbane", "east-brisbane", "4169"),
    ("South Brisbane", "south-brisbane", "4101"),
    ("Tennyson", "tennyson", "4105"),
    ("Gaythorne", "gaythorne", "4051"),
    ("Westlake", "westlake", "4074"),
    ("Upper Kedron", "upper-kedron", "4055"),
    ("Seventeen Mile Rocks", "seventeen-mile-rocks", "4073"),
    ("Wavell Heights", "wavell-heights", "4012"),
    ("Chandler", "chandler", "4155"),
    ("Manly", "manly", "4179"),
    ("McDowall", "mcdowall", "4053"),
    ("Yeerongpilly", "yeerongpilly", "4105"),
    ("Carina Heights", "carina-heights", "4152"),
    ("Greenslopes", "greenslopes", "4120"),
    ("Stones Corner", "stones-corner", "4120"),
    ("Breakfast Creek", "breakfast-creek", "4010"),
]

def gen_suburb(name, slug, postcode):
    nearby = '["paddington", "new-farm", "bulimba", "indooroopilly", "toowong", "bardon"]'
    return f'''    {{
        name: "{name}",
        slug: "{slug}",
        postcode: "{postcode}",
        seoTitle: "Flooring Installation in {name} | Timber, Hybrid & Vinyl Floors",
        metaDescription: "Professional flooring installation in {name}. Timber, hybrid, vinyl & laminate floors. Oxley-based—Brisbane's top suburbs.",
        introParagraph: "Turner Installs delivers premium flooring installation throughout {name}. We install timber flooring, hybrid flooring, vinyl plank flooring, and laminate flooring for homes across the suburb. Based in Oxley with easy highway access, we service {name} and Brisbane's top suburbs.",
        localRelevance: "{name}'s mix of homes—from heritage Queenslanders to modern renovations—creates strong demand for quality flooring. We're experienced with subfloor preparation, tile removal, and delivering finishes that suit the area's housing.",
        whyChooseLocal: "We service {name} from our Oxley base. Fast site visits, high-end finish, and experience with Brisbane's premium suburbs.",
        ctaText: "If you're in {name} and looking for a professional flooring installer, contact us today for a quote.",
        nearbySuburbs: {nearby},
    }},'''

def main():
    out = []
    for name, slug, postcode in SUBS:
        out.append(gen_suburb(name, slug, postcode))
    print("\n".join(out))

if __name__ == "__main__":
    main()
