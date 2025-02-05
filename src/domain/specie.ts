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
  }
export interface SpeciesList {
    Specie: Specie[]
}