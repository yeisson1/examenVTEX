import Style from './index.css'

interface IExamen{
    calificacion:number;
    imagen0_69:string;
    imagen70_100:string;

}

const Examen = ({calificacion, imagen0_69, imagen70_100}:IExamen) => {

    if(calificacion >= 0 && calificacion <= 69) return <div className={Style.containerExamen}><span className={Style.titlePage}>Su calificación es: {calificacion} %</span><img src={imagen0_69}/></div>

    return <div className={Style.containerExamen}><span className={Style.titlePage}>Su calificación es: {calificacion} %</span><img src={imagen70_100}/></div>
}


Examen.defaultProps = {
    calificacion: 100
}

const copy = () => {
    return <div style={{fontSize:12, textAlign:"center"}}>Desarrollado por Yeisson SP</div>
}

Examen.getSchema = () => {
    return {
        title: 'Examen Final',
        type: 'object',
        properties: {
            calificacion : {
                title: "Calificacion",
                type: "number",
                enum:[0, 1, 2,	3,	4,	5,	6,	7,	8,	9,	10, 11,	12,	13,	14,	15,	16,	17,	18,	19,	20, 21,	22,	23,	24,	25,	26,	27,	28,	29,	30, 31,	32,	33,	34,	35,	36,	37,	38,	39,	40, 41,	42,	43,	44,	45,	46,	47,	48,	49,	50, 51,	52,	53,	54,	55,	56,	57,	58,	59,	60, 61,	62,	63,	64,	65,	66,	67,	68,	69,	70, 71,	72,	73,	74,	75,	76,	77,	78,	79,	80, 81,	82,	83,	84,	85,	86,	87,	88,	89,	90, 91,	92,	93,	94,	95,	96,	97,	98,	99,	100]
            },
            imagen0_69: {
                title: 'Imagen (0% - 69%)',
                type : 'string',
                widget: {
                    'ui:widget': 'image-uploader'
                }
            },
            imagen70_100: {
                title: 'Imagen (70% - 100%)',
                type : 'string',
                widget: {
                    'ui:widget': 'image-uploader'
                }
            },
            autor:{
                title:"Config",
                type:"string",
                widget:{
                    'ui:widget': copy
                }
            }
    
    
        }
    }
}

export default Examen;