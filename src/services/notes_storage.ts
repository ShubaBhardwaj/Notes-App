import AsyncStorage from "@react-native-async-storage/async-storage";

type Note = {
  title: string;
  description: string;
};

type Notes = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
};

export const notesServices = {
  saveNote: async ({ title, description }: Note) => {
    if (!title || !description) {
      throw new Error("Title and description are required");
    }
    const note = {
      id: Date.now().toString(),
      title,
      description,
      createdAt: new Date().toISOString(),
    };
    try {
      const oldNotes = await AsyncStorage.getItem("notes");
      const oldNotesArray: Notes[] = oldNotes ? JSON.parse(oldNotes) : [];
      const newNotesArray = [...oldNotesArray, note];
      await AsyncStorage.setItem("notes", JSON.stringify(newNotesArray));
      return note;
    } catch (error) {
      console.error("Error saving note:", error);
    }
  },
  getNotes: async () => {
    try {
      const notes = await AsyncStorage.getItem("notes");
      return notes ? JSON.parse(notes) : [];
    } catch (error) {
      console.error("Error fetching notes:", error);
      return [];
    }
  },

  searchNotes: async (query: string) => {
    try {
      const notes = await AsyncStorage.getItem("notes");

      const parsedNotes: Notes[] = notes ? JSON.parse(notes) : [];

      return parsedNotes.filter((note: Notes) =>
        note.title.toLowerCase().includes(query.toLowerCase()),
      );
    } catch (error) {
      console.error("Error searching notes:", error);
      return [];
    }
  },

  deleteNote: async (id: string) => {
    try {
      // GET ALL NOTES
      const notes = await AsyncStorage.getItem("notes");

      // PARSE NOTES
      const parsedNotes: Notes[] = notes ? JSON.parse(notes) : [];

      // REMOVE NOTE
      const updatedNotes = parsedNotes.filter((note) => note.id !== id);

      // SAVE AGAIN
      await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));

      return updatedNotes;
    } catch (error) {
      console.error("Error deleting note:", error);

      return [];
    }
  },

  updateNote: async (id: string, title: string, description: string) => {
    try {
      // GET ALL NOTES
      const notes = await AsyncStorage.getItem("notes");

      // PARSE NOTES
      const parsedNotes: Notes[] = notes ? JSON.parse(notes) : [];

      // UPDATE NOTE
      const updatedNotes = parsedNotes.map((note) =>
        note.id === id ? { ...note, title, description} : note,
      );

      // SAVE AGAIN
      await AsyncStorage.setItem("notes", JSON.stringify(updatedNotes));

      return updatedNotes;
    } catch (error) {
      console.error("Error updating note:", error);

      return [];
    }
  },
};
