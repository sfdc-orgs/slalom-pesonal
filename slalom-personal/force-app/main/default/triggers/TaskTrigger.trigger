trigger TaskTrigger on Task (after insert) {
    
    List<Task> followupTasks = new List<Task>();
    for(Task theTask : Trigger.New){
        Task newTask = new Task(Status = 'New', Priority='Normal');
        newTask.Subject = 'Follw-up for '+theTask.Subject;
        newTask.ActivityDate = Date.today().adddays(30);
        newTask.RecordTypeId = '0124T000000Pym0QAC';
        followupTasks.add(newTask);
    }
    insert followupTasks;
}