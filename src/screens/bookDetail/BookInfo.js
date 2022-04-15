import { Box } from "@components/Box";
import { Text } from "@components/Text";
import React from "react";

const BookInfo = ({ title, authors, description }) => {
  const mappedAuthors = authors?.map(authors2 => authors2.name).join("& ");

  return (
    <>
      <Box py="s" px="xl" backgroundColor="background-basic-color-1">
        <Text textAlign="center" category="h6">
          {title}
        </Text>
      </Box>
      <Text textAlign="center" category="h6" fontWeight="lighter">
        {`by ${mappedAuthors}`}
      </Text>
      <Text mx="m" mt="m" fontWeight="bold">
        Description
      </Text>
      <Text mx="m">
        In this must-read book for anyone striving to succeed, pioneering
        psychologist Angela Duckworth shows parents, educators, students, and
        business people both seasoned and new that the secret to outstanding
        achievement is not talent but a focused persistence called grit. Why do
        some people succeed and others fail? Sharing new insights from her
        landmark research on grit, Angela Duckworth explains why talent is
        hardly a guarantor of success. Rather, other factors can be even more
        crucial such as identifying our passions and following through on our
        commitments.
      </Text>
    </>
  );
};

export { BookInfo };
