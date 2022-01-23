export interface Node {
    
}

export interface Recommend  {
    id: number,
    userName: string,
    description: object,
    favorite: number,
    share: number,
    nodes: Array<Node>,
    develop: number, //0: FE, 1: BE, 2: DevOps
    years: number,
}

export interface Skill {
    id: number,
    title: string,
    path: string,
    checked?: boolean,
}

export interface DevStack {
    id: number,
    title: string,
}