<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Categories') }}
        </h2>
    </x-slot>

    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div class="w-full mb-12 xl:mb-0 mx-auto">
        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
          <div class="rounded-t p-4 border-0">
            <div class="flex flex-wrap items-center">
              <div class="relative w-full px-4 max-w-full flex-grow flex-1">
{{--                          <h3 class="font-semibold text-base text-blueGray-700">Page Visits</h3> --}}
              </div>
              <div class="relative w-full px-2 max-w-full flex-grow flex-1 text-right">
                <a href="{{ route('categories.create') }}" 
                  class="bg-blue-500 p-2 text-white active:bg-blue-600 text-xs font-bold uppercase rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  <i class="fa fa-plus mr-2"></i>
                  Ajouter une categorie
                </a>
              </div>
            </div>
          </div>

          <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Nom
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Slug
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Parent
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
                </tr>
              </thead>
              <tbody>
                @forelse($categories as $category)
                <tr>
                  <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                    {{ $category->label }}
                  </th>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {{ $category->slug }}
                  </td>
                  <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {{ optional($category->parent)->label ?? '' }}
                  </td>
                  <td class="border-t-0 px-6 align-middle justify-end border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <div class="flex gap-3 items-center justify-end w-full">
                      <a class="bg-green-500 hover:bg-green-600 text-white p-2 rounded" href="{{ route('categories.show', $category) }}">
                        <i class="fa fa-eye mr-1"></i>
                        Voir
                      </a>
                      <a class="bg-violet-500 hover:bg-violet-600 text-white p-2 rounded" href="{{ route('categories.edit', $category) }}">
                        <i class="fa fa-pencil mr-1"></i>
                          Edit
                      </a>
                      <form class="inline-block" action="{{ route('categories.destroy', $category) }}" method="POST" 
                          onsubmit="return confirm('Voulez vous vraiment supprimer la categorie ?');">
                          @method('DELETE')
                          @csrf
                          <button class="cursor-pointer bg-red-500 hover:bg-red-600 text-white p-2 rounded" type="submit">  
                            <i class="fa fa-trash mr-1"></i>
                            Delete
                          </button>
                      </form>
                    </div>
                  </td>
                </tr>
                @empty
                <tr>
                  <td colspan="100%" class="p-2">
                    <p class="text-center">
                      Aucune categorie trouvé
                    </p>
                  </td>
                </tr>
                @endforelse
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
</x-app-layout>
