import React from 'react';

const List = ({people}) => {
  return (
      <div>
        {people.map((person)=>{
            const {id, name, age, image} = person;
            return (
                <article key = {id} className="person">
                  <img src={image} alt = {name} />

                </article>
                  );
        })}
    </div>
  );
};

export default List;
