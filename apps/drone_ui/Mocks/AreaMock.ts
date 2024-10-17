import { MarkerType } from "../src/features/map/marker/types";

export const AREA_MOCK: Record<string, MarkerType> = {
    parkLotnikow: [50.07067783481583, 19.99104153339751],
    lazienkiKrolewskie: [52.215933, 21.037822],
    parkCytadela: [52.422289, 16.939829],
    parkSzczytniki: [51.107885, 17.075744],
    parkSlaski: [50.288262, 18.973011]
}

export const AREA_KEYS: string[] = Object.keys(AREA_MOCK)
