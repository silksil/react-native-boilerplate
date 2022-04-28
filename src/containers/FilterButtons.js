import React from "react";
import { Button } from "@components/buttons/Button";
import { Box } from "@components/Box";

const getFilterButtonApperance = (selectedFilter, filters) => {
  if (selectedFilter === filters.name) return "filled";
  return "outline";
};

const FilterButtons = ({ filters, setSelecterFilter, selectedFilter }) => {
  return (
    <Box flexDirection="row" ml="m" mb="m">
      {filters.map(filter => (
        <Button
          mr="xs"
          status="basic"
          appearance={getFilterButtonApperance(selectedFilter, filter)}
          onPress={() => setSelecterFilter(filter.name)}
        >
          {filter.text}
        </Button>
      ))}
    </Box>
  );
};

export { FilterButtons };
