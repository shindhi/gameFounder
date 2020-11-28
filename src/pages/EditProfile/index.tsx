import React, { useState, useMemo, useCallback } from 'react';
import { Platform } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import User from '../../assets/user1.png';

import Input from '../../components/Input';

import {
  Header,
  Container,
  Title,
  ProfileImage,
  GroupForm,
  SelectDate,
  SelectDateText,
} from './styles';

const EditProfile: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const formattedDate = useMemo(() => {
    return format(date, "dd'/'MM'/'yyyy");
  }, [date]);

  const onChange = useCallback(
    (event, selectedDate) => {
      const currentDate = selectedDate || date;

      setShow(Platform.OS === 'ios');
      setDate(currentDate);
    },
    [date]
  );

  const handleSelectDate = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <>
      <Header>
        <MaterialCommunityIcons name="chevron-left" size={26} color="#fff" />
      </Header>
      <Container>
        <Title>Editar perfil</Title>

        <ProfileImage source={User} />

        <Input name="nome" icon="user" placeholder="Nome completo" />

        <Input name="nickname" icon="user" placeholder="Nickname" />

        <GroupForm>
          <SelectDate>
            <SelectDateText>{formattedDate}</SelectDateText>
            <FeatherIcon
              name="calendar"
              size={20}
              color="#666360"
              onPress={handleSelectDate}
            />

            {show && (
              <DateTimePicker
                value={date}
                display="spinner"
                onChange={onChange}
              />
            )}
          </SelectDate>
        </GroupForm>
      </Container>
    </>
  );
};

export default EditProfile;
