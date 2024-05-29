import React from "react";
import { View, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { styles } from "./styles";

interface Props {
  onSubmit: (input: string) => void;
  reset: () => void;
  searchPokemonText: string;
}

const SearchBar = ({ onSubmit, reset, searchPokemonText }: Props) => {
  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm();
  return (
    <>
      <View style={styles.container}>
        <Controller
          control={control}
          // rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Search Pokemon..."
              placeholderTextColor="#999"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="pokemonInput"
          defaultValue=""
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit((data: any) =>
            onSubmit(String(data.pokemonInput))
          )}
        >
          <Image
            source={require("../../assets/images/search.png")}
            style={{ height: 20, width: 20 }}
          />
        </TouchableOpacity>
        {searchPokemonText && (
          <TouchableOpacity style={styles.buttonReset} onPress={reset}>
            <Image
              source={require("../../assets/images/reset.png")}
              style={{ height: 20, width: 20 }}
            />
          </TouchableOpacity>
        )}
      </View>
      {/* <View style={{ height: 26 }}>
        {errors.pokemonInput && (
          <Text style={styles.errorText}>Field ini wajib diisi.</Text>
        )}
      </View> */}
    </>
  );
};

export default SearchBar;
