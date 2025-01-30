export interface Family {
    KingdomCommonName: string;
    KingdomName: string;
    ClassCommonName: string;
    ClassName: string;
    FamilyName: string;
    FamilyCommonName: string;
    FamilyRank: string;
    SpeciesUrl: string;
  }
export interface FamilyList {
    Family: Family[]
}