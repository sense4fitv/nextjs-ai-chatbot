'use server';

import { generateText, Message } from 'ai';
import { cookies } from 'next/headers';
import { auth } from '../(auth)/auth';

import {
  deleteMessagesByChatIdAfterTimestamp,
  getMessageById,
  updateChatVisiblityById,
  updateUserCoach
} from '@/lib/db/queries';
import { VisibilityType } from '@/components/visibility-selector';
import { myProvider } from '@/lib/ai/models';

export async function saveChatModelAsCookie(model: string) {
  const cookieStore = await cookies();
  cookieStore.set('chat-model', model);
}

export async function generateTitleFromUserMessage({
  message,
}: {
  message: Message;
}) {
  const { text: title } = await generateText({
    model: myProvider.languageModel('title-model'),
    system: `\n
    - you will generate a short title based on the first message a user begins a conversation with
    - ensure it is not more than 80 characters long
    - the title should be a summary of the user's message
    - do not use quotes or colons`,
    prompt: JSON.stringify(message),
  });

  return title;
}

export async function deleteTrailingMessages({ id }: { id: string }) {
  const [message] = await getMessageById({ id });

  await deleteMessagesByChatIdAfterTimestamp({
    chatId: message.chatId,
    timestamp: message.createdAt,
  });
}

export async function updateChatVisibility({
  chatId,
  visibility,
}: {
  chatId: string;
  visibility: VisibilityType;
}) {
  await updateChatVisiblityById({ chatId, visibility });
}


export async function assignCoach(trainerId: string) {
  try {
      const session = await auth(); // Get authenticated user
      if (!session?.user?.id) {
          return { error: 'User not authenticated' };
      }

      const userId = session.user.id;
      const coachId = trainerId;

      const success = await updateUserCoach(userId, coachId);
      return success ? { message: 'Coach assigned successfully' } : { error: 'Update failed' };
  } catch (error) {
      return { error: 'Internal Server Error' };
  }
}
