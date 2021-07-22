import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

import { Boot } from "customTypes";
import BootBox from "./BootBox";
import AddBoot from "./AddBoot";
import Button from "./Button";

const BootCollection: React.FC = () => {
  const user = useSelector((state: RootState) => state.userReducer);

  const [userBoots, setUserBoots] = useState<Boot[]>([]);

  useEffect((): void => {
    getUserBoots();
  }, []);

  const getUserBoots = (): void => {
    axios
      .get("/api/boot/boot")
      .then((res) => {
        const userBootsData = res.data;
        console.log(userBootsData);
        setUserBoots(userBootsData);
      })
      .catch((error) => console.log(error));
  };

  const mappedBoots = () => {
    userBoots.map((elem: Boot, index: number) => {
      return (
        <div key={index}>
          <BootBox {...elem}></BootBox>
        </div>
      );
    });
  };

  return (
    <section className="bootCollection">
      <h3>{user.username} Boot Collection</h3>
      {mappedBoots}
      <div className="addBootContainer">
        <AddBoot />
      </div>
      <div className='addBootBtn'>
        <Button>
          <Link to="/add">Add Boot</Link>
        </Button>
      </div>
    </section>
  );
};

export default BootCollection;
