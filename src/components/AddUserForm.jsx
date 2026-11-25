import React from 'react';
import { useForm } from 'react-hook-form';
import { addUserAxios } from '../services/userApi.services';

function AddUserForm({ onAddUser }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: '', lastName: '', age: '', email: '' },
  });

  const onSubmit = async (data) => {
    try {
      const created = await addUserAxios(data);
      // הדמיה: השרת לא שומר באמת, ולכן נותנים id ייחודי משלנו
      onAddUser({ ...data, ...created, id: Date.now() });
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="add-student-form" onSubmit={handleSubmit(onSubmit)}>
      <h3>הוספת משתמש חדש</h3>

      <div className="field">
        <input
          type="text"
          placeholder="שם פרטי"
          {...register('firstName', {
            required: 'שם פרטי הוא שדה חובה',
            minLength: { value: 2, message: 'מינימום 2 תווים' },
          })}
        />
        <p className="error">{errors.firstName?.message}</p>
      </div>

      <div className="field">
        <input
          type="text"
          placeholder="שם משפחה"
          {...register('lastName', { required: 'שם משפחה הוא שדה חובה' })}
        />
        <p className="error">{errors.lastName?.message}</p>
      </div>

      <div className="field">
        <input
          type="number"
          placeholder="גיל"
          {...register('age', {
            required: 'גיל הוא שדה חובה',
            valueAsNumber: true,
            min: { value: 1, message: 'גיל לא תקין' },
          })}
        />
        <p className="error">{errors.age?.message}</p>
      </div>

      <div className="field">
        <input
          type="text"
          placeholder="אימייל"
          {...register('email', {
            required: 'אימייל הוא שדה חובה',
            pattern: { value: /^\S+@\S+\.\S+$/, message: 'אימייל לא תקין' },
          })}
        />
        <p className="error">{errors.email?.message}</p>
      </div>

      <button type="submit">הוסף משתמש</button>
    </form>
  );
}

export default AddUserForm;