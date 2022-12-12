import React from "react";
import { Box, Input } from "../common-components";
import { useCol } from "../Hooks";

const images = [
  "https://shinemongol.edu.mn/upload/event/cfko64Ts17zrLPnSpNEIsA5iuVjt6i6ylZXDM5ON.jpeg",
  "https://shinemongol.edu.mn/upload/news/EnCCY3JhRUceawewXdEXk97z34o2gHsmuaBXt0oF.jpeg",
  "https://shinemongol.edu.mn/upload/club/rBgTJ0TrBaJnAELe1HHASiMLHbjobal5uXDWCfFZ.jpeg",
  "https://content.ikon.mn/news/2020/8/11/txaa3t_ykhkhk_x974.jpg",
  "https://i.ytimg.com/vi/qEWyY8ghF6A/maxresdefault.jpg"
];

const defaultImg =
  "data:image/jpeg;base64,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";

export const PopUp = ({
  open,
  setOpen,
  img = defaultImg,
  setImg,
  name,
  setName,
  description,
  setDescription,
}) => {
  const { createRecord } = useCol("/clubs");

  const randomNumberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const uploadClub = async () => {
    const new_img = images[randomNumberGenerator(0, 5)]

    const club = {
      name,
      description,
      img: new_img,
    };

    await createRecord(name, club).then(() => setOpen(false));
  };

  return (
    <>
      {open && (
        <Box
          width="100vw"
          height="100vh"
          position="absolute"
          display="flex"
          justify="center"
          items="center"
        >
          <Box
            width="100vw"
            height="100vh"
            background="black"
            opacity={0.5}
            position="absolute"
            onClick={() => setOpen(!open)}
          />
          <Box
            width="500px"
            height="500px"
            background="white"
            z={1}
            display="flex"
            direction="column"
            justify="space-evenly"
            items="center"
            m="12px"
            br="12px"
          >
            <img
              style={{ width: "80%", height: "200px", background: "grey" }}
              src={img}
            />
            <input
              type="file"
              disabled
              onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
            ></input>
            <Box width="80%" opacity="0.6">
              The image upload feature is not available currently(due to google
              storage error). Please wait patiently for top_c.
            </Box>
            <Input
              width="80%"
              placeholder="club name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              style={{ width: "80%", height: "100px" }}
              placeholder="club description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Box pointer onClick={() => uploadClub()}>
              DONE
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
