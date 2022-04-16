import { Box } from "@components/Box";
import { Divider as BaseDivider } from "@components/Divider";
import { ListItem } from "@components/List";
import { SearchBar } from "@components/SearchBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

const Divider = () => <BaseDivider mt="m" />;

const renderNote = ({ navigate, item, index }) => {
  const authors = "jo";

  return (
    <ListItem
      key={index}
      mb="m"
      title={item.book.title}
      subtitle={`by ${authors}`}
      imgSrc={item.book.cover}
      ItemSeparatorComponent={Divider}
      onPress={() => navigate("Item", { book: item })}
    />
  );
};

function SearchUploads() {
  const {
    params: { notes },
  } = useRoute();
  const { navigate } = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    const filter =
      notes &&
      notes.filter(
        note =>
          note?.book?.authors?.name
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          note?.book?.title?.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    filter && setFilteredNotes(filter);
  }, [notes, searchQuery]);

  return (
    <>
      <SearchBar
        mx="m"
        mb="s"
        placeholder="Search by title"
        debounceDelay={200}
        callback={value => setSearchQuery(value)}
      />
      <Box mx="m" flex={1} flexGrow={1}>
        <FlatList
          data={filteredNotes}
          renderItem={props => renderNote({ navigate, ...props })}
        />
      </Box>
    </>
  );
}

export { SearchUploads };
