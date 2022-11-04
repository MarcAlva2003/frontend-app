import { HomeStyle } from "./home-style";
import { format } from 'date-fns';
import { getCompaniesList } from "../../../services/companies";
import { getDeleteCompany } from "../../../services/companies";
import {
  Heading1,
  Subhead1,
  Text16
} from "../../../ui/styles/typography";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../../../ui/icon/icon";
import { IconList } from "../../../ui/iconsList";
import { Button } from "../../../ui/button/button";
import { useState, useEffect } from "react";
import { isAuthenticated } from "../../../services/auth";
import { DeleteCompanyModal } from "../delete-company-modal/delete-company-modal";
import { ICompany } from "../../../services/interfaces";


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
                <Link to="/companies/add">
                  <Button
                    text="Add company"
                    type="primary"
                    size="large"
                    radius="medium"
                  />
                </Link>
              </div>
            </div>
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
                      <Text16>Foundation date: {
                        format(new Date(item?.foundation_date), 'dd/MM/yyyy')
                      }</Text16>
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