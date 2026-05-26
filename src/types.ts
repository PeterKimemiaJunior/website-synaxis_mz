export interface ProductModule {
  id: string;
  name: string;
  useCase: string;
  benefits: string[];
  icon: string; // lucide icon name or similar
  imageOffset?: string;
}

export interface EcosystemFeature {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
}

export interface ProblemCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  badgeColor: string;
  textColor: string;
}

export interface ClientType {
  id: string;
  title: string;
  description: string;
}

export interface PartnerFeature {
  id: string;
  title: string;
  description: string;
}
