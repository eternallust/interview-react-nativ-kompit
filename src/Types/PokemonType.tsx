export type PokemonTypesType =
  | "fighter"
  | "flying"
  | "ground"
  | "normal"
  | "poison"
  | "rock"
  | "steel"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | string[];

export interface PokemonListResponseType {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSummaryType[];
}

export interface PokemonSummaryType {
  name: string;
  url?: string;
  id?: string;
  type?: string;
}

export interface PokemonDetailType {
  abilities: AbilityType[];
  base_experience: number;
  cries: CriesType;
  forms: FormType[];
  game_indices: GameIndexType[];
  height: number;
  held_items: HeldItemType[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveType[];
  name: string;
  order: number;
  past_abilities: PastAbilityType[];
  past_types: PastTypeType[];
  species: SpeciesType;
  sprites: SpritesType;
  stats: StatType[];
  types: TypeType[];
  weight: number;
}

export interface AbilityType {
  ability: AbilityDetailType;
  is_hidden: boolean;
  slot: number;
}

export interface AbilityDetailType {
  name: string;
  url: string;
}

export interface CriesType {
  latest: string;
  legacy: string;
}

export interface FormType {
  name: string;
  url: string;
}

export interface GameIndexType {
  game_index: number;
  version: VersionType;
}

export interface VersionType {
  name: string;
  url: string;
}

export interface HeldItemType {
  // Define fields if there are any in the actual data
}

export interface MoveType {
  move: MoveDetailType;
  version_group_details: VersionGroupDetailType[];
}

export interface MoveDetailType {
  name: string;
  url: string;
}

export interface VersionGroupDetailType {
  level_learned_at: number;
  move_learn_method: MoveLearnMethodType;
  version_group: VersionGroupType;
}

export interface MoveLearnMethodType {
  name: string;
  url: string;
}

export interface VersionGroupType {
  name: string;
  url: string;
}

export interface PastAbilityType {
  // Define fields if there are any in the actual data
}

export interface PastTypeType {
  // Define fields if there are any in the actual data
}

export interface SpeciesType {
  name: string;
  url: string;
}

export interface SpritesType {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other: OtherSpritesType;
  versions: VersionsType;
}

export interface OtherSpritesType {
  dream_world: DreamWorldSpritesType;
  home: HomeSpritesType;
  "official-artwork": OfficialArtworkSpritesType;
  showdown: ShowdownSpritesType;
}

export interface DreamWorldSpritesType {
  front_default: string;
  front_female: string | null;
}

export interface HomeSpritesType {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface OfficialArtworkSpritesType {
  front_default: string;
  front_shiny: string;
}

export interface ShowdownSpritesType {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface VersionsType {
  "generation-i": GenerationIType;
  "generation-ii": GenerationIIType;
  "generation-iii": GenerationIIIType;
  "generation-iv": GenerationIVType;
  "generation-v": GenerationVType;
  "generation-vi": GenerationVIType;
  "generation-vii": GenerationVIIType;
  "generation-viii": GenerationVIIIType;
}

export interface GenerationIType {
  "red-blue": RedBlueSpritesType;
  yellow: YellowSpritesType;
}

export interface RedBlueSpritesType {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface YellowSpritesType {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

export interface GenerationIIType {
  crystal: CrystalSpritesType;
  gold: GoldSpritesType;
  silver: SilverSpritesType;
}

export interface CrystalSpritesType {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

export interface GoldSpritesType {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface SilverSpritesType {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

export interface GenerationIIIType {
  emerald: EmeraldSpritesType;
  "firered-leafgreen": FireredLeafgreenSpritesType;
  "ruby-sapphire": RubySapphireSpritesType;
}

export interface EmeraldSpritesType {
  front_default: string;
  front_shiny: string;
}

export interface FireredLeafgreenSpritesType {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface RubySapphireSpritesType {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface GenerationIVType {
  "diamond-pearl": DiamondPearlSpritesType;
  "heartgold-soulsilver": HeartgoldSoulsilverSpritesType;
  platinum: PlatinumSpritesType;
}

export interface DiamondPearlSpritesType {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface HeartgoldSoulsilverSpritesType {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface PlatinumSpritesType {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface GenerationVType {
  "black-white": BlackWhiteSpritesType;
}

export interface BlackWhiteSpritesType {
  animated: AnimatedSpritesType;
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface AnimatedSpritesType {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface GenerationVIType {
  "omegaruby-alphasapphire": OmegarubyAlphasapphireSpritesType;
  "x-y": XYspritesType;
}

export interface OmegarubyAlphasapphireSpritesType {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface XYspritesType {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface GenerationVIIType {
  icons: IconsSpritesType;
  "ultra-sun-ultra-moon": UltraSunUltraMoonSpritesType;
}

export interface IconsSpritesType {
  front_default: string;
  front_female: string | null;
}

export interface UltraSunUltraMoonSpritesType {
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface GenerationVIIIType {
  icons: IconsSpritesType;
}

export interface StatType {
  base_stat: number;
  effort: number;
  stat: StatDetailType;
}

export interface StatDetailType {
  name: string;
  url: string;
}

export interface TypeType {
  slot: number;
  type: TypeDetailType;
}

export interface TypeDetailType {
  name: string;
  url: string;
}
