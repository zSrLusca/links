import {View, Text,TouchableOpacity} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { router } from "expo-router";
import { styles } from "./styles"
import { colors } from "@/styles/colors"
import { Input } from "@/components/input";
import { Categories } from "@/components/categories";
import { Button } from "@/components/button";

export default function Add(){
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={25} color={colors.gray[200]}/>
                </TouchableOpacity>
                <Text style={styles.title}>Novo</Text>
            </View>
            <Text style={styles.label}>Selecione uma categoria</Text>
            <Categories/>
            <View style={styles.form}>
            <Input placeholder="nome"/>
            <Input placeholder="Url"/>
            <Button title="Adicionar"/>
            </View>
            
        </View>
    )
}