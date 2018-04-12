export default {
    id: 172,
    name: "DisbursementCheck",
    schema: "Dimension",
    fullName: "Dimension.DisbursementCheck",
    columns: [
        {
            name: "ID",
            type: "Long",
            isForeignKey: false,
            isPrimaryKey: true
        },
        {
            name: "Date Requested",
            type: "Date",
            isForeignKey: false,
            isPrimaryKey: false
        },
        {
            name: "Disbursement Type",
            type: "String",
            isForeignKey: false,
            isPrimaryKey: false
        },
        {
            name: "Disbursement Address Type",
            type: "String",
            isForeignKey: false,
            isPrimaryKey: false
        },
        {
            name: "Check Number",
            type: "String",
            isForeignKey: false,
            isPrimaryKey: false
        },
        {
            name: "Stop Pay Date",
            type: "Date",
            isForeignKey: false,
            isPrimaryKey: false
        },
        {
            name: "Amount",
            type: "Decimal",
            isForeignKey: false,
            isPrimaryKey: false
        }
    ],
    relationships: [
        {
            column: {
                name: "ID"
            },
            relatedTable: {
                name: "Claims",
                schema: "Fact",
                fullName: "Fact.Claims"
            },
            relatedColumn: {
                name: "DisbursementCheckKey"
            }
        }
    ]
}