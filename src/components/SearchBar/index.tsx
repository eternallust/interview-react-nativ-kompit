import React from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { styles } from "./styles";

interface Props {
  onSubmit: (input: string) => void;
  reset: () => void;
}

const SearchBar = ({ onSubmit, reset }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <View style={styles.container}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Masukkan teks di sini..."
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
          <Text style={styles.buttonText}>Cari</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={reset}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
      {errors.pokemonInput && (
        <Text style={styles.errorText}>Field ini wajib diisi.</Text>
      )}
    </>
  );
};

export default SearchBar;
