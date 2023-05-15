import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import customConfirm from "../../utils/CustomConfirm";
import GenericeList from "../genericList/GenericeList";
import Pagination from "../pagination/Pagination";
import RecordsPerPageSelect from "../recordsPerPage/RecordsPerPageSelect";

export default function IndexEntity<T>(props: indexEntityProps<T>) {
  const [entities, setEntities] = useState<T[]>();
  const [totalAmountOfPages, setTotalAmountOfPages] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, recordsPerPage]);

  function loadData() {
    axios
      .get(props.url, {
        params: { page, recordsPerPage },
      })
      .then((response: AxiosResponse<T[]>) => {
        const totalAmountOfRecords = parseInt(
          response.headers["totalamountofrecords"],
          10
        );
        setTotalAmountOfPages(Math.ceil(totalAmountOfRecords / recordsPerPage));
        setEntities(response.data);
      });
  }

  async function deleteEntity(id: number) {
    try {
      await axios.delete(`${props.url}/${id}`);
      loadData();
    } catch (error: any) {
      if (error && error.response) {
        console.error(error.response.data);
      }
    }
  }

  const buttons = (editURL: string, id: number) => (
    <>
      <td>
        <Link className="btn btn-success" to={editURL}>
          ערוך
        </Link>
      </td>
      <td>
        <Button
          onClick={() => customConfirm(() => deleteEntity(id))}
          className="btn btn-danger"
        >
          מחק
        </Button>
      </td>
    </>
  );

  return (
    <div dir="rtl">
      <h2 dir="rtl">{props.title}</h2>
      {props.createURL ? (
        <Link className="btn btn-dark" to={props.createURL} dir="rtl">
          יצירת {props.entityName}
        </Link>
      ) : null}
      <RecordsPerPageSelect
        onChange={(amountOfRecords) => {
          setPage(1);
          setRecordsPerPage(amountOfRecords);
        }}
      />
      <Pagination
        currentPage={page}
        totalAmountOfPages={totalAmountOfPages}
        onChange={(newPage) => setPage(newPage)}
      />
      <GenericeList list={entities}>
        <table className="table table-striped">
          {props.children(entities!, buttons)}
        </table>
      </GenericeList>
    </div>
  );
}

interface indexEntityProps<T> {
  url: string;
  createURL?: string;
  title: string;
  entityName?: string;
  children(
    entities: T[],
    buttons: (editURL: string, id: number) => ReactElement
  ): ReactElement;
}
