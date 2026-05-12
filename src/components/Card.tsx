import { Text, View, Pressable, useColorScheme } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { getCardStyles } from '../styles/card';
import { Colors } from '../utils/theme';

type CardProps = {
    title: string;
    description: string;
    date: string;
    onDelete?: () => void;
}

const Card = ({ title, description, date, onDelete }: CardProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme === 'dark' ? 'dark' : 'light'];
  const cardStyles = getCardStyles(theme);

  const shortDescription = description.split(" ").slice(0, 8).join(" ") + "...";
  
  // Format the date to look beautiful (e.g., "May 12, 2026")
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const handleDelete = () => {
    if (onDelete) {
      onDelete();
    }
  };

  return (
    <View style={cardStyles.cardContainer}>
      <View style={cardStyles.row}>
        <View style={cardStyles.textContainer}>
          <Text style={cardStyles.title} numberOfLines={1}>{title}</Text>
          <Text style={cardStyles.description} numberOfLines={2}>{shortDescription}</Text>
          <Text style={cardStyles.date}>{formattedDate}</Text>
        </View>
        <Pressable onPress={handleDelete} style={cardStyles.deleteButton}>
          <Ionicons name="trash-outline" size={24} color={theme.deleteIcon} />
        </Pressable>
      </View>
    </View>
  )
}

export default Card
