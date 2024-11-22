export type Session = {
    sessionId?: string,
    cans: number,
    bottles: number,
    subtotal: number
}

export type Config = {
    content: number,
    station: string
}

export enum Vessel {
    BOTTLE = "BOTTLE",
    CAN = "CAN"
}
