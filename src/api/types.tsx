export type Session = {
    sessionId?: string,
    cans: number,
    bottles: number,
    subtotal: number
}

export enum Vessel {
    BOTTLE = "BOTTLE",
    CAN = "CAN"
}