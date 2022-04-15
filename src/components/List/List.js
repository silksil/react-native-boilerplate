import React from "react";

import * as S from "./styled";

const List = ({ data, renderItem, navigation, ...rest }) => {
  if (!Array.isArray(data) || !data.length) return null;

  return (
    <S.List
      data={data}
      renderItem={props => renderItem({ navigation, ...props })}
      keyExtractor={item => item.id}
      extraData={[1]}
      {...rest}
    />
  );
};

export default List;
