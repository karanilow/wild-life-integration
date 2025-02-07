export interface Specie {
    KingdomCommonName: string;
    KingdomName: string;
    ClassCommonName: string;
    ClassName: string;
    FamilyName: string;
    FamilyCommonName: string;
    FamilyRank: string;
    SpeciesUrl: string;
    IsSupervised: boolean;
    TaxonID: number;
    ScientificName: string,
    AcceptedCommonName: string
  }
export interface SpeciesList {
    Species: Specie[]
}
export interface SpecieDetail {
  Species : Specie
}