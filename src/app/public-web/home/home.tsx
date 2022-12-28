import {
  Heading1,
  Subhead1,
  Text16
} from "../../../ui/styles/typography";
import { Link, useNavigate } from "react-router-dom";
import { enUS, es } from "date-fns/locale";
import { useEffect, useState } from "react";

import { Button } from "../../../ui/button/button";
import { DeleteCompanyModal } from "../../../components/delete-company-modal/delete-company-modal";
import { HomeStyle } from "./home-style";
import { ICompany } from "../../../services/interfaces";
import { Icon } from "../../../ui/icon/icon";
import { IconList } from "../../../ui/iconsList";
import { Theme } from "../../../ui/styles/theme";
import { format } from 'date-fns';
import { getCompaniesList } from "../../../services/companies";
import { getDeleteCompany } from "../../../services/companies";
import { getOrdinal } from "../../../services/date-ordinal";
import { isAuthenticated } from "../../../services/auth";

export const Home = () => {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState<ICompany[]>();
  useEffect(() => {
    getCompaniesList().then(res => setCompanies(res));
  }, [])

  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [companyToDeleteId, setCompanyToDeleteId] = useState<string>('');

  const handleDeleteCompany = (id: string) => {
    getDeleteCompany(id);
    setDeleteModal(false);
    document.location.reload();
  }

  const handleDeleteCompanyAuth = (id: string) => {
    if (isAuthenticated()) {
      setDeleteModal(true);
      setCompanyToDeleteId(id);
    } else {
      navigate("/login");
    }
  }

  return (
    <HomeStyle>
      <div className="home-background">
        <div className="home-content">
          <div className="home">
            <div className="home-title">
              <div className="home-title--title">
                <Heading1>Companies List</Heading1>
              </div>
              <div className="home-title--button">
                {(companies && companies?.length > 0) && (
                  <Link to="/companies/add">
                    <Button
                      text="Add company"
                      type="primary"
                      size="large"
                      radius="medium"
                    />
                  </Link>
                )}
              </div>
            </div>
            {(companies?.length === 0 || !companies) ? (
              <div className="companies-empty">
                <div className="companies-empty--title">
                  <Subhead1>We could not find companies</Subhead1>
                </div>
                {/* <div className="companies-empty--icon">
                  <Icon
                    icon={IconList.custom.building}
                    size="70px"
                    fillColor={Theme.blues.blue500}
                  />
                </div> */}
                <Link to="/companies/add">
                  <div className="companies-empty--message">
                    <div className="companies-empty--message__icon">
                      <Icon
                        icon={IconList.actions.add}
                        size="24px"
                        fillColor={Theme.blues.blue500}
                      />
                    </div>
                    <div className="companies-empty--message__text">
                      <Text16
                        color={Theme.blues.blue500}
                      >Add a company</Text16>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <div className="companies-list">
                {companies?.map((item: any, index: number) => (
                  <div className="company-card" key={`company-item-${index}`}>
                    <div className="company-card-name">
                      <Subhead1>{item?.name}</Subhead1>
                    </div>
                    <div className="company-card-text">
                      <div className="company-card-text--country">
                        <Text16>Foundation country: {item?.foundation_country}</Text16>
                      </div>
                      <div className="company-card-text--date">
                        <Text16>Foundation date: {getOrdinal(new Date(item?.foundation_date).getDate() + 1)}
                          {format(new Date(item?.foundation_date), ` MMMM, yyyy`, { locale: enUS })}
                        </Text16>
                      </div>
                    </div>
                    <div className="company-card-buttons">
                      <div className="company-card-buttons--button">
                        <Link to={`/companies/${item?.id}`}>
                          <Button
                            type="secondary"
                            size="large"
                            text="Details"
                            radius="low"
                          />
                        </Link>
                      </div>
                      <div className="company-card-buttons--button">
                        <Link to={`/companies/edit/${item?.id}`}>
                          <Button
                            type="secondary"
                            size="large"
                            text="Edit"
                            radius="low"
                          />
                        </Link>
                      </div>
                      <div className="company-card-buttons--button">
                        <Button
                          type="danger1"
                          size="large"
                          text="Delete"
                          radius="low"
                          onClick={() => {
                            handleDeleteCompanyAuth(item?.id)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <DeleteCompanyModal
        active={deleteModal}
        onClose={() => {
          setDeleteModal(false);
        }}
        onAccept={() => {
          isAuthenticated() ? handleDeleteCompany(companyToDeleteId) : navigate('/login');
        }}
      />
    </HomeStyle>
  )
}