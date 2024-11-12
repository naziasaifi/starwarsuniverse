
import React, { useState, useEffect } from 'react';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Button } from 'primereact/button';
import { DataTable, DataTableFilterMeta } from 'primereact/datatable';
import { ColumnsData } from '../../model/DataTable';
import { Column } from 'primereact/column';


export default function CommonDataTable(props:any) {
    const [filters, setFilters] = useState<DataTableFilterMeta| undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [names, setNames] = useState([]);
    const clearFilter = () => {
        initFilters();
    };
    useEffect(()=>{
        if(props.columns && !names){
             setNames(props.columns.map((val: ColumnsData)=>val.field));
        }
    },[props.columns]);
    const onGlobalFilterChange = (e:any) => {
        const value = e.target.value;
        let _filters = { ...filters };
        if(_filters.global)
         {
            _filters.global = { value: value, matchMode: FilterMatchMode.CONTAINS }
         }

        setFilters(_filters);
        setGlobalFilterValue(value);
    };

    const initFilters = () => {
        setFilters({
            global: { value: '', matchMode: FilterMatchMode.CONTAINS }
        });
        setGlobalFilterValue('');
    };

    const renderHeader = () => {
        return (
            <div className="flex justify-content-between ">
                {props.back?<Button type="button" style={{marginRight:".5rem"}} icon="pi pi-filter-slash" label="Back" outlined onClick={props.back} />:null}
                <Button type="button" icon="pi pi-filter-slash" label="Clear" outlined onClick={clearFilter} />
                <IconField iconPosition="left" className='rd-table-search-input'>
                    <InputIcon className="pi pi-search" />
                    <InputText className='' value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                </IconField>
            </div>
        );
    };

    const header = renderHeader();

    return (
        <div className="rd-common-table">
            <DataTable editMode="cell" value={props.data} paginator showGridlines rows={10} loading={loading} dataKey="id" 
                    filters={filters} header={header} globalFilterFields={names}
                    emptyMessage="No data found."
                    currentPageReportTemplate="{first} to {last} of {totalRecords}" >
            
            {
                props.columns?
                     props.columns.map((k:ColumnsData)=>{
                        return <Column field={k.field}  key={k.field} header={k.header}></Column>
                    }):null
            }
            </DataTable>
        </div>
    );
}

