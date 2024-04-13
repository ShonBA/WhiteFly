import { Gallery } from "./Gallery"
import { LifeStories } from "./LifeStories"
import { Obituary } from "./Obituaries"
import { Project } from "./Project"

export interface Person {
    _id: string
    firstName: string
    secName: string
    lastName: string
    birthYear: number
    deathYear: number
    nextMemory: string
    mainImageUrl: string
    lifeStories: LifeStories
    gallery: Gallery[]
    obituaries: Obituary[]
    pray: string
    projects: Project[]
}








