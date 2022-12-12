import React, { useState } from "react";
import { Box, Text, colors } from "../common-components";
import { PopUp } from "../components/pop-up";
import { useCol } from "../Hooks";

export const ExploreClubs = () => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const { data } = useCol("/clubs");

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justify="space-evenly"
      direction="row"
      wrap='wrap'
    >
      <PopUp
        open={open}
        setOpen={setOpen}
        img={img}
        setImg={setImg}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
      />

      {data.map((club) => {
        const { img, name, description } = club;
        return (
          <Box p="12px" width='300px' height>
            <img style={{ width: '280px'}} src={img} />
            <Text mt='12px' fs="32px">{name}</Text>
            <Text mt='12px'>{description}</Text>
          </Box>
        );
      })}

      <Box
        height="60px"
        width="60px"
        borderColor={colors.mainColor}
        br="50%"
        display="flex"
        items="center"
        justify="center"
        pointer
        onClick={() => setOpen(true)}
        position="absolute"
        bottom="24px"
        right="24px"
      >
        <Text fs="10px" color={colors.mainColor} hover>
          Add Club
        </Text>
      </Box>
    </Box>
  );
};
