import React from "react";
import ButtonBlue from "../../components/common/ButtonBlue";
import NoteCard from "../../components/common/NoteCard";

const Home = () => {
  return (
    <div className="w-screen h-screen body bg-center bg-cover">
      <div className="overlay h-screen w-screen overflow-auto">
        <div className="w-3/4 mx-auto my-[3dvh]">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold text-white">BrainDump</h3>
            <ButtonBlue label={'+ Add new note'}/>
          </div>
          <div className="panel mt-5 grid grid-cols-3 gap-3">
            <NoteCard title={'This is a note card'} body={'Elit ipsum Lorem velit voluptate quis ex aliquip ea est eu labore dolor.'}/>
            <NoteCard title={'This is a note card'} body={'Elit ipsum Lorem velit voluptate quis ex aliquip ea est eu labore dolor. Elit ipsum Lorem velit voluptate quis ex aliquip ea est eu labore dolor.'}/>
            <NoteCard title={'This is a note card'} body={'Elit ipsum Lorem velit voluptate quis ex aliquip ea est eu labore dolor.'}/>
            <NoteCard title={'This is a note card'} body={'Elit ipsum Lorem velit voluptate quis ex aliquip ea est eu labore dolor.'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
