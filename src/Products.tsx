import React, { useState } from 'react'

export type Products = {
    id: number;
    nombre: string;
    precio: number;
    cantidad: number;
};


export const Products = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        id: Math.random(),
        nombre: '',
        precio: '',
        cantidad: ''
    });

    let products = [
        {id: formData.id, nombre: formData.nombre, precio: formData.precio, cantidad: formData.cantidad}
    ]

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        products.concat(formData);
        console.log('Datos del formulario:', formData);
        setModalOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const onEdit = (id: number): void => {
        products.find((productId) => productId.id === id);
    }

    const onDelete = (id: number): void => {
        products.filter((productRemove) => productRemove.id !== id);
    }

    return (
        <>
            <button onClick={() => setModalOpen(true)}>Abrir Formulario</button>

            {modalOpen && (
                <div style={styles.overlay} onClick={() => setModalOpen(false)}>
                    <div style={styles.modal} onClick={e => e.stopPropagation()}>
                        <h2>Formulario</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="name"
                                type="text"
                                placeholder="Nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                            <input
                                name="precio"
                                type="number"
                                placeholder="Precio"
                                value={formData.precio}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                            <input
                                name="cantidad"
                                type="text"
                                placeholder="Cantidad"
                                value={formData.cantidad}
                                onChange={handleChange}
                                required
                                style={styles.input}
                            />
                            <button type="submit" style={styles.submitButton}>Guardar</button>
                        </form>
                        <button onClick={() => setModalOpen(false)} style={styles.closeButton}>Cerrar</button>
                    </div>
                </div>
            )}

            <div>
                <table>
                    <caption>
                        Tabla de productos
                    </caption>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre formed</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product) => (
                            <tr key={product?.id}>
                                <td>{product?.id}</td>
                                <td>{product?.nombre}</td>
                                <td>${product?.precio}</td>
                                <td>{product?.cantidad}</td>
                                <td>
                                    <button onClick={() => onEdit(product?.id)}>Editar</button>
                                    <button onClick={() => onDelete(product?.id)}>Eliminar</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </>
    )
}

const styles: { [key: string]: React.CSSProperties } = {
    overlay: {
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    modal: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        width: 300,
        boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    },
    input: {
        width: '100%',
        marginBottom: 12,
        padding: 8,
        fontSize: 14,
        borderRadius: 4,
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    submitButton: {
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: 10,
        borderRadius: 4,
        cursor: 'pointer',
        width: '100%',
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        padding: 10,
        borderRadius: 4,
        cursor: 'pointer',
        width: '100%',
    }
};