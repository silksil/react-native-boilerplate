import React from "react";
import { Button } from "@components/buttons/Button";
import { Vibration } from "react-native";
import { Box } from "@components/Box";

const getFilterButtonApperance = (queryFilter, buttonFilterType) => {
  if (queryFilter === buttonFilterType) return "filled";
  return "outline";
};

const FILTERS = {
  ALL: "All",
  THINGS: "things",
  OTHER_THINGS: "Other thingsr",
};

const onPress = (filter, setQueryFilter) => {
  setQueryFilter(filter);
  Vibration.vibrate();
};

const FilterButtons = ({ queryFilter, setQueryFilter }) => {
  return (
    <Box flexDirection="row" ml="m" mb="m">
      <Button
        status="basic"
        appearance={getFilterButtonApperance(queryFilter, FILTERS.ALL)}
        onPress={() => onPress(FILTERS.ALL, setQueryFilter)}
      >
        All
      </Button>
      <Button
        status="basic"
        appearance={getFilterButtonApperance(queryFilter, FILTERS.BOOK)}
        ml="xs"
        onPress={() => onPress(FILTERS.BOOK, setQueryFilter)}
      >
        Book
      </Button>
      <Button
        status="basic"
        appearance={getFilterButtonApperance(queryFilter, FILTERS.AUTHOR)}
        ml="xs"
        onPress={() => onPress(FILTERS.AUTHOR, setQueryFilter)}
      >
        Author
      </Button>
    </Box>
  );
};

export { FilterButtons };
