const { z } = require("zod");

const abilitySchema = z.object({
  ability: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  is_hidden: z.boolean(),
  slot: z.number(),
});

const formSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const gameIndexSchema = z.object({
  game_index: z.number(),
  version: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

const moveSchema = z.object({
  move: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  version_group_details: z.array(
    z.object({
      level_learned_at: z.number(),
      move_learn_method: z.object({
        name: z.string(),
        url: z.string().url(),
      }),
      version_group: z.object({
        name: z.string(),
        url: z.string().url(),
      }),
    })
  ),
});

const speciesSchema = z.object({
  name: z.string(),
  url: z.string().url(),
});

const spriteSchema = z.object({
  back_default: z.string().url().nullable(),
  back_female: z.string().url().nullable(),
  back_shiny: z.string().url().nullable(),
  back_shiny_female: z.string().url().nullable(),
  front_default: z.string().url().nullable(),
  front_female: z.string().url().nullable(),
  front_shiny: z.string().url().nullable(),
  front_shiny_female: z.string().url().nullable(),
  other: z.object({
    dream_world: z.object({
      front_default: z.string().url().nullable(),
      front_female: z.string().url().nullable(),
    }),
    home: z.object({
      front_default: z.string().url().nullable(),
      front_female: z.string().url().nullable(),
      front_shiny: z.string().url().nullable(),
      front_shiny_female: z.string().url().nullable(),
    }),
    "official-artwork": z.object({
      front_default: z.string().url().nullable(),
      front_shiny: z.string().url().nullable(),
    }),
    showdown: z.object({
      back_default: z.string().url().nullable(),
      back_female: z.string().url().nullable(),
      back_shiny: z.string().url().nullable(),
      back_shiny_female: z.string().url().nullable(),
      front_default: z.string().url().nullable(),
      front_female: z.string().url().nullable(),
      front_shiny: z.string().url().nullable(),
      front_shiny_female: z.string().url().nullable(),
    }),
  }),
  versions: z.object({
    "generation-i": z.object({
      "red-blue": z.object({
        back_default: z.string().url().nullable(),
        back_gray: z.string().url().nullable(),
        back_transparent: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_gray: z.string().url().nullable(),
        front_transparent: z.string().url().nullable(),
      }),
      yellow: z.object({
        back_default: z.string().url().nullable(),
        back_gray: z.string().url().nullable(),
        back_transparent: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_gray: z.string().url().nullable(),
        front_transparent: z.string().url().nullable(),
      }),
    }),
    "generation-ii": z.object({
      crystal: z.object({
        back_default: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        back_shiny_transparent: z.string().url().nullable(),
        back_transparent: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_transparent: z.string().url().nullable(),
        front_transparent: z.string().url().nullable(),
      }),
      gold: z.object({
        back_default: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_transparent: z.string().url().nullable(),
      }),
      silver: z.object({
        back_default: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_transparent: z.string().url().nullable(),
      }),
    }),
    "generation-iii": z.object({
      emerald: z.object({
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
      }),
      "firered-leafgreen": z.object({
        back_default: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
      }),
      "ruby-sapphire": z.object({
        back_default: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
      }),
    }),
    "generation-iv": z.object({
      "diamond-pearl": z.object({
        back_default: z.string().url().nullable(),
        back_female: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        back_shiny_female: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
      "heartgold-soulsilver": z.object({
        back_default: z.string().url().nullable(),
        back_female: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        back_shiny_female: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
      platinum: z.object({
        back_default: z.string().url().nullable(),
        back_female: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        back_shiny_female: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
    }),
    "generation-v": z.object({
      "black-white": z.object({
        animated: z.object({
          back_default: z.string().url().nullable(),
          back_female: z.string().url().nullable(),
          back_shiny: z.string().url().nullable(),
          back_shiny_female: z.string().url().nullable(),
          front_default: z.string().url().nullable(),
          front_female: z.string().url().nullable(),
          front_shiny: z.string().url().nullable(),
          front_shiny_female: z.string().url().nullable(),
        }),
        back_default: z.string().url().nullable(),
        back_female: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        back_shiny_female: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
    }),
    "generation-vi": z.object({
      "omegaruby-alphasapphire": z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
      "x-y": z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
    }),
    "generation-vii": z.object({
      icons: z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
      }),
      "ultra-sun-ultra-moon": z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
    }),
    "generation-viii": z.object({
      icons: z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
      }),
    }),
  }),
});

const statSchema = z.object({
  base_stat: z.number(),
  effort: z.number(),
  stat: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

const typeSchema = z.object({
  slot: z.number(),
  type: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
});

export const pokemonDetailSchema = z.object({
  abilities: z.array(abilitySchema),
  base_experience: z.number(),
  forms: z.array(formSchema),
  game_indices: z.array(gameIndexSchema),
  height: z.number(),
  held_items: z.array(z.any()),
  id: z.number(),
  is_default: z.boolean(),
  location_area_encounters: z.string().url(),
  moves: z.array(moveSchema),
  name: z.string(),
  order: z.number(),
  past_types: z.array(z.any()),
  species: speciesSchema,
  sprites: spriteSchema,
  stats: z.array(statSchema),
  types: z.array(typeSchema),
  weight: z.number(),
});

export const pokemonSchema = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.string(),
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    })
  ),
});
