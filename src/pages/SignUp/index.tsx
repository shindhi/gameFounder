import React, { useCallback, useMemo, useState } from 'react';
import { Image, Platform, ScrollView } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Input from '../../components/Input';
import Button from '../../components/Button';

import photo from '../../assets/photoPerfil.png';

import {
  Container,
  Header,
  ContainerForm,
  InputWrapper,
  TextInput,
  SelectDate,
  SelectDateText,
  SelectGenre,
  ContainerButton,
  CancelButton,
  CancelButtonText,
} from './styles';

const SingUp: React.FC = () => {
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
    [date, SelectDate]
  );

  const handleSelectDate = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <Container>
      <Header>
        <Image source={photo} />
      </Header>

      <ScrollView keyboardShouldPersistTaps="handled">
        <ContainerForm>
          <Input name="name" icon="user" placeholder="Nome completo" />
          <Input name="nickname" icon="user" placeholder="Nickname" />
          <Input name="password" icon="lock" placeholder="Senha" />
          <Input
            name="confirm_password"
            icon="lock"
            placeholder="Confirmar senha"
          />

          <InputWrapper>
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

            <SelectGenre>
              <TextInput placeholder="Gênero" />
            </SelectGenre>
          </InputWrapper>

          <ContainerButton>
            <Button children="Cadastrar" />

            {/* Cancel Button */}
            <CancelButton>
              <CancelButtonText>Cancelar</CancelButtonText>
            </CancelButton>
          </ContainerButton>
        </ContainerForm>
      </ScrollView>
    </Container>
  );
};

export default SingUp;
