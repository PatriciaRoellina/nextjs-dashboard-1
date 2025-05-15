import Image from 'next/image';

type Customer = {
  id: string | number;
  name: string;
  email: string;
  image_url?: string;
};

type User = {
  id: string | number;
  name: string;
  username: string;
  role: string;
};

type Product = {
  id: string | number;
  name: string;
  price: number;
  description: string;
  image?: string;
};

type DataType = 'customer' | 'user' | 'product';

interface DataTableProps {
  data: Customer[] | User[] | Product[];
  type: DataType;
  loading?: boolean;
  error?: string;
}

export default function DataTable({ data, type, loading, error }: DataTableProps) {
  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;
  if (!data || data.length === 0) return <p className="p-4">No data found.</p>;

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          {/* Mobile */}
          <div className="md:hidden">
            {data.map((item: any) => (
              <div key={item.id} className="mb-2 w-full rounded-md bg-white p-4">
                {type === 'customer' && (
                  <div className="flex items-center gap-3 border-b pb-4">
                    {item.image_url ? (
                      <Image
                        src={item.image_url}
                        alt={item.name}
                        width={28}
                        height={28}
                        className="rounded-full"
                      />
                    ) : (
                      <div className="w-7 h-7 bg-gray-300 rounded-full" />
                    )}
                    <div>
                      <p>{item.name}</p>
                      <p className="text-sm text-gray-500">{item.email}</p>
                    </div>
                  </div>
                )}

                {type === 'user' && (
                  <div className="border-b pb-4">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">@{item.username}</p>
                    <p className="text-xs text-gray-400 italic">Role: {item.role}</p>
                  </div>
                )}

                {type === 'product' && (
                  <div className="flex items-center gap-3 border-b pb-4">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={28}
                        height={28}
                        className="rounded-md"
                      />
                    ) : (
                      <div className="w-7 h-7 bg-gray-300 rounded-md" />
                    )}
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm">{item.description}</p>
                      <p className="text-sm font-medium">
                        {item.price.toLocaleString('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                        })}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop */}
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                {type === 'customer' && (
                  <>
                    <th className="px-6 py-5 font-medium">Name</th>
                    <th className="px-3 py-5 font-medium">Email</th>
                  </>
                )}
                {type === 'user' && (
                  <>
                    <th className="px-6 py-5 font-medium">Name</th>
                    <th className="px-3 py-5 font-medium">Username</th>
                    <th className="px-3 py-5 font-medium">Role</th>
                  </>
                )}
                {type === 'product' && (
                  <>
                    <th className="px-6 py-5 font-medium">Name</th>
                    <th className="px-3 py-5 font-medium">Description</th>
                    <th className="px-3 py-5 font-medium">Price</th>
                  </>
                )}
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item: any) => (
                <tr
                  key={item.id}
                  className="border-b text-sm last-of-type:border-none
                  [&:first-child>td:first-child]:rounded-tl-lg
                  [&:first-child>td:last-child]:rounded-tr-lg
                  [&:last-child>td:first-child]:rounded-bl-lg
                  [&:last-child>td:last-child]:rounded-br-lg"
                >
                  {type === 'customer' && (
                    <>
                      <td className="whitespace-nowrap py-3 px-6">{item.name}</td>
                      <td className="whitespace-nowrap py-3 px-3">{item.email}</td>
                    </>
                  )}
                  {type === 'user' && (
                    <>
                      <td className="whitespace-nowrap py-3 px-6">{item.name}</td>
                      <td className="whitespace-nowrap py-3 px-3">@{item.username}</td>
                      <td className="whitespace-nowrap py-3 px-3">{item.role}</td>
                    </>
                  )}
                  {type === 'product' && (
                    <>
                      <td className="whitespace-nowrap py-3 px-6">{item.name}</td>
                      <td className="py-3 px-3 max-w-xs">{item.description}</td>
                      <td className="whitespace-nowrap py-3 px-3">
                        {item.price.toLocaleString('id-ID', {
                          style: 'currency',
                          currency: 'IDR',
                        })}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
