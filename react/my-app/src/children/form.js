import { useForm } from 'react-hook-form';
import './form.css';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log('something');
  const onSubmit = (data) => console.log(data);

  return (
    <div className="add-user-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name:</label>
          <input
            {...register('name', { required: true, maxLength: 20 })}
            className="form-control"
          />
          {errors.name?.type === 'maxLength' && (
            <p role="alert">Name should be of max length 20</p>
          )}
        </div>
        <div className="form-group">
          <label>Age:</label>
          <input
            {...register('age', { min: 18, max: 99 })}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <p>Gender:</p>
          <label htmlFor="male">Male</label>
          <input
            className="form-control"
            {...register('gender')}
            type="radio"
            value="male"
            id="male"
          />
          <label htmlFor="female">Female</label>
          <input
            {...register('gender')}
            type="radio"
            value="female"
            id="female"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Rank:</label>
          <input
            className="form-control"
            {...register('rank', { min: 18, max: 99 })}
          />
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}
