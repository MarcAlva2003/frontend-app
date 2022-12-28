import { FormProvider, useForm } from "react-hook-form";
import { Heading1, Subhead1, Text16 } from "../../../ui/styles/typography";
import { useEffect, useState } from 'react';

import { Button } from "../../../ui/button/button";
import Cookies from "js-cookie";
import { Icon } from "../../../ui/icon/icon";
import { IconList } from "../../../ui/iconsList";
import { Input } from "../../../ui/input/input";
import { ModalWrapper } from "../../../ui/modal-wrapper/modal-wrapper";
import { ProfileStyle } from "./profile-style";
import { SESSION_COOKIE_NAME } from "../../../services/auth";
import { Theme } from "../../../ui/styles/theme";
import { capitalize } from 'lodash';
import { getEditUserInformation } from "../../../services/users";
import { getUserInformation } from "../../../services/users";

export const Profile = () => {

  const [user, setUser] = useState({
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    date_joined: '',
  });
  const [editUserField, setEditUserField] = useState<
    {
      active: boolean,
      field: 'username' | 'first_name' | 'last_name',
    }
  >({
    active: false,
    field: 'last_name',
  });


  const formMethods = useForm({
    defaultValues: {
      username: '',
      first_name: '',
      last_name: '',
    }
  })
  const { register, watch, setValue } = formMethods;

  useEffect(() => {
    getUserInformation().then(res => setUser(res));
    register('username');
    register('first_name');
    register('last_name');
  }, []);

  const onEdit = () => {
    getEditUserInformation({
      operation: editUserField.field,
      first_name: watch('first_name'),
      username: watch('username'),
      last_name: watch('last_name'),
    }).then(res => {
      getUserInformation().then(res => setUser(res));
    })
  }

  // useEffect(() => {

  // }, []);

  return (
    <ProfileStyle>
      <div className="profile-container">
        <div className="profile">
          <div className="profile-title">
            <Heading1>Your Profile</Heading1>
          </div>
          <div className="profile-body">
            <div className="profile-body-row username-row">
              <div className="profile-body-row--item">
                <Subhead1
                  weight={600}
                >Username: </Subhead1>
              </div>
              <div className="profile-body-row--item">
                <Subhead1
                  weight={400}
                >{user?.username}</Subhead1>
              </div>
              <div
                className="profile-body-row--item modify-button"
                onClick={() => {
                  setEditUserField({ field: "username", active: true })
                }}
              >
                <Icon
                  icon={IconList.actions.edit}
                  size="24px"
                  fillColor={Theme.blues.blue200}
                />
              </div>
            </div>
            <div className="profile-body-row first-name-row">
              <div className="profile-body-row--item">
                <Text16
                  weight={600}
                >First name: </Text16>
              </div>
              <div className="profile-body-row--item">
                <Text16
                  weight={400}
                >{user?.first_name}</Text16>
              </div>
              <div
                className="profile-body-row--item modify-button"
                onClick={() => {
                  setEditUserField({ field: "first_name", active: true })
                }}  
              >
                {user?.first_name === '' ? (
                  <Text16
                    weight={400}
                  >Add first name</Text16>
                ) : (
                  <Icon
                    icon={IconList.actions.edit}
                    size="22px"
                    fillColor={Theme.blues.blue200}
                  />
                )}
              </div>
            </div>
            <div className="profile-body-row second-name-row">
              <div className="profile-body-row--item">
                <Text16
                  weight={600}
                >Last name: </Text16>
              </div>
              <div className="profile-body-row--item">
                <Text16
                  weight={400}
                >{user?.last_name}</Text16>
              </div>
              <div
                className="profile-body-row--item modify-button"
                onClick={() => {
                  setEditUserField({ field: "last_name", active: true })
                }}  
              >
                {user?.last_name === '' ? (
                  <Text16
                    weight={400}
                  >Add last name</Text16>
                ) : (
                  <Icon
                    icon={IconList.actions.edit}
                    size="22px"
                    fillColor={Theme.blues.blue200}
                  />
                )}
              </div>
            </div>
            <div className="profile-body-row email-row">
              <div className="profile-body-row--item">
                <Text16
                  weight={600}
                >Email: </Text16>
              </div>
              <div className="profile-body-row--item">
                <Text16
                  weight={400}
                >{user?.email}</Text16>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalWrapper
        active={editUserField.active}
      >
        <div className="modal">
          <div className="modal-title">
            <Subhead1 weight={600}>Enter the {capitalize(editUserField.field.replace('_', ' '))}</Subhead1>
          </div>
          <FormProvider {...formMethods}>
            <div className="modal-input">
              <Input
                type="text"
                placeholder={capitalize(editUserField.field.replace('_', ' '))}
                value={watch(editUserField.field)}
                onChange={(ev: any) => { setValue(editUserField.field, ev.target.value) }}
              />
            </div>
          </FormProvider>
          <div className="modal-buttons">
            <div className="modal-buttons--button">
              <Button
                text="Cancel"
                type="danger1"
                size="large"
                onClick={() => {
                  setEditUserField({ ...editUserField, active: false });
                  setValue(editUserField.field, '');
                }}
              />
            </div>
            <div className="modal-buttons--button">
              <Button
                text="Save"
                type="primary"
                size="large"
                onClick={() => {
                  setEditUserField({ ...editUserField, active: false });
                  onEdit();
                  setValue(editUserField.field, '');
                }}
              />
            </div>
          </div>
        </div>
      </ModalWrapper>
    </ProfileStyle>
  )
}