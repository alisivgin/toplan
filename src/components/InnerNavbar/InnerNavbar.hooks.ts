import { useQuery, useQueryClient, useMutation } from 'react-query';
import { Room, UseGetDomain } from 'components/InnerNavbar/InnerNavbar.d';
import axios from 'lib/axios';
import { ShellKeys } from 'containers/Shell';

// APIs
async function getDomain(id: string) {
  const { data } = await axios.get(`api/domain/${id}`);
  return data;
}

async function createRoom(value: Room) {
  const { data } = await axios.post('api/room', value);
  return data;
}

// react query hooks
export const useGetDomain: UseGetDomain = (id: string, options) => {
  const { data, status, error } = useQuery(
    ShellKeys.domain(id),
    () => getDomain(id),
    options,
  );
  return { data, status, error };
};

export const useCreateRoom = () => {
  const queryClient = useQueryClient();

  return useMutation(createRoom, {
    // Notice the second argument is the variables object that the `mutate` function receives
    onSuccess: (data, variables) => {
      console.log('onSuccess', data, variables);
      // queryClient.setQueryData(['todo', { id: variables.id }], data);
      queryClient.invalidateQueries(ShellKeys.domain(variables.domainId));
    },
  });
};
